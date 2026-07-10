import { NextResponse } from "next/server";

export async function GET() {
  const apiKey = process.env.WAKATIME_API_KEY;

  if (!apiKey) {
    return NextResponse.json({ configured: false });
  }

  try {
    const basicAuth = Buffer.from(`${apiKey}:`).toString("base64");
    const res = await fetch(
      "https://wakatime.com/api/v1/users/current/stats/last_7_days",
      {
        headers: { Authorization: `Basic ${basicAuth}` },
        next: { revalidate: 3600 },
      }
    );

    if (!res.ok) {
      return NextResponse.json({ configured: true, error: true });
    }

    const { data } = await res.json();
    return NextResponse.json({
      configured: true,
      totalText: data?.human_readable_total ?? "N/A",
      dailyAverageText: data?.human_readable_daily_average ?? "N/A",
      languages: (data?.languages ?? []).slice(0, 5).map((lang: { name: string; percent: number }) => ({
        name: lang.name,
        percent: lang.percent,
      })),
    });
  } catch {
    return NextResponse.json({ configured: true, error: true });
  }
}
