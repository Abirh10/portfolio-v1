"use client";

import { useEffect, useState } from "react";

type Stats = {
  configured: boolean;
  totalText?: string;
  dailyAverageText?: string;
  languages?: { name: string; percent: number }[];
};

export default function WakatimeStats() {
  const [data, setData] = useState<Stats | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/wakatime-stats")
      .then((res) => res.json())
      .then((d) => {
        if (!cancelled) setData(d);
      })
      .catch(() => {
        if (!cancelled) setData({ configured: true });
      });
    return () => {
      cancelled = true;
    };
  }, []);

  if (data === null) {
    return <p className="text-sm" style={{ color: "var(--ink-dim)" }}>Loading…</p>;
  }

  if (!data.configured) {
    return (
      <p className="text-sm" style={{ color: "var(--ink-dim)" }}>
        Not connected — WakaTime offline.
      </p>
    );
  }

  return (
    <div>
      <p className="text-sm mb-3">{data.totalText ?? "N/A"} in the last 7 days</p>
      <div className="flex flex-col gap-1.5">
        {data.languages?.slice(0, 3).map((lang) => (
          <div key={lang.name} className="flex items-center gap-2 text-xs">
            <span className="w-16 shrink-0 truncate">{lang.name}</span>
            <span className="rounded-full flex-1 h-2 overflow-hidden" style={{ background: "var(--surface)" }}>
              <span
                className="block h-full rounded-full"
                style={{ width: `${lang.percent}%`, background: "var(--accent)" }}
              />
            </span>
            <span className="w-9 text-right shrink-0" style={{ color: "var(--ink-dim)" }}>
              {lang.percent.toFixed(0)}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
