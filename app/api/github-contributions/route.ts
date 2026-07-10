import { NextResponse } from "next/server";

const GITHUB_USERNAME = "Abirh10";

export async function GET() {
  try {
    const res = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) {
      return NextResponse.json({ configured: true, error: true, contributions: [] });
    }
    const data = await res.json();
    return NextResponse.json({ configured: true, contributions: data.contributions ?? [] });
  } catch {
    return NextResponse.json({ configured: true, error: true, contributions: [] });
  }
}
