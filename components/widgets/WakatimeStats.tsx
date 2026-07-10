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
    return <p className="text-sm text-win-text-dim">Loading coding stats…</p>;
  }

  if (!data.configured) {
    return <p className="text-sm text-win-text-dim">Not connected — WakaTime offline.</p>;
  }

  return (
    <div>
      <p className="text-sm mb-1">Last 7 days: {data.totalText ?? "N/A"}</p>
      <p className="text-sm text-win-text-dim mb-3">Daily average: {data.dailyAverageText ?? "N/A"}</p>
      <div className="flex flex-col gap-1.5">
        {data.languages?.map((lang) => (
          <div key={lang.name} className="flex items-center gap-2 text-xs">
            <span className="w-20 shrink-0 truncate">{lang.name}</span>
            <span className="bevel-in flex-1 h-3">
              <span
                className="block h-full"
                style={{ width: `${lang.percent}%`, background: "var(--win-accent)" }}
              />
            </span>
            <span className="w-10 text-right shrink-0">{lang.percent.toFixed(0)}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
