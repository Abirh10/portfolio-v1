import { NextResponse } from "next/server";

export async function GET() {
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
  const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN;

  if (!clientId || !clientSecret || !refreshToken) {
    return NextResponse.json({ configured: false });
  }

  try {
    const basicAuth = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");
    const tokenRes = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        Authorization: `Basic ${basicAuth}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "refresh_token",
        refresh_token: refreshToken,
      }),
      cache: "no-store",
    });

    if (!tokenRes.ok) {
      return NextResponse.json({ configured: true, isPlaying: false, error: true });
    }
    const { access_token } = await tokenRes.json();

    const nowPlayingRes = await fetch("https://api.spotify.com/v1/me/player/currently-playing", {
      headers: { Authorization: `Bearer ${access_token}` },
      cache: "no-store",
    });

    if (nowPlayingRes.status === 204 || !nowPlayingRes.ok) {
      return NextResponse.json({ configured: true, isPlaying: false });
    }

    const data = await nowPlayingRes.json();
    if (!data?.item) {
      return NextResponse.json({ configured: true, isPlaying: false });
    }

    return NextResponse.json({
      configured: true,
      isPlaying: Boolean(data.is_playing),
      track: {
        name: data.item.name,
        artists: data.item.artists?.map((a: { name: string }) => a.name).join(", "),
        url: data.item.external_urls?.spotify,
      },
    });
  } catch {
    return NextResponse.json({ configured: true, isPlaying: false, error: true });
  }
}
