"use client";

import { useEffect, useState } from "react";

type NowPlaying = {
  configured: boolean;
  isPlaying?: boolean;
  track?: { name: string; artists: string; url?: string };
};

export default function SpotifyNowPlaying() {
  const [data, setData] = useState<NowPlaying | null>(null);

  useEffect(() => {
    let cancelled = false;
    const fetchData = () => {
      fetch("/api/spotify-now-playing")
        .then((res) => res.json())
        .then((d) => {
          if (!cancelled) setData(d);
        })
        .catch(() => {
          if (!cancelled) setData({ configured: true, isPlaying: false });
        });
    };
    fetchData();
    const interval = setInterval(fetchData, 30_000);
    return () => {
      cancelled = true;
      clearInterval(interval);
    };
  }, []);

  if (data === null) {
    return <p className="text-sm text-win-text-dim">Connecting…</p>;
  }

  if (!data.configured) {
    return <p className="text-sm text-win-text-dim">Not connected — Spotify offline.</p>;
  }

  if (!data.isPlaying || !data.track) {
    return <p className="text-sm text-win-text-dim">Nothing playing right now.</p>;
  }

  return (
    <a
      href={data.track.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block text-sm hover:underline"
    >
      <span className="text-win-accent">♪</span> {data.track.name} — {data.track.artists}
    </a>
  );
}
