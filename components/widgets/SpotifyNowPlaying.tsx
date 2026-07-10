"use client";

import { useEffect, useState } from "react";

type NowPlaying = {
  configured: boolean;
  isPlaying?: boolean;
  track?: { name: string; artists: string; url?: string; albumImageUrl?: string };
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
    return <p className="text-sm" style={{ color: "var(--ink-dim)" }}>Connecting…</p>;
  }

  if (!data.configured) {
    return (
      <p className="text-sm" style={{ color: "var(--ink-dim)" }}>
        Not connected — Spotify offline.
      </p>
    );
  }

  if (!data.isPlaying || !data.track) {
    return (
      <p className="text-sm" style={{ color: "var(--ink-dim)" }}>
        Nothing playing right now.
      </p>
    );
  }

  return (
    <a
      href={data.track.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 hover:opacity-80 transition-opacity"
    >
      {data.track.albumImageUrl ? (
        // eslint-disable-next-line @next/next/no-img-element -- small external avatar, not worth next/image config for one widget
        <img
          src={data.track.albumImageUrl}
          alt=""
          className="w-9 h-9 rounded-md shrink-0"
          style={{ border: "1px solid var(--border)" }}
        />
      ) : (
        <span className="w-9 h-9 rounded-md shrink-0 flex items-center justify-center" style={{ background: "var(--surface)" }}>
          ♪
        </span>
      )}
      <span className="text-sm truncate">
        <span style={{ color: "var(--ink)" }}>{data.track.name}</span>
        <span style={{ color: "var(--ink-dim)" }}> — {data.track.artists}</span>
      </span>
    </a>
  );
}
