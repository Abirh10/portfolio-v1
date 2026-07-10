"use client";

import { useEffect, useState } from "react";

type Contribution = { date: string; count: number; level: number };

const WEEKS = 12;

export default function GithubContributions() {
  const [contributions, setContributions] = useState<Contribution[] | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/github-contributions")
      .then((res) => res.json())
      .then((data) => {
        if (!cancelled) setContributions(data.contributions ?? []);
      })
      .catch(() => {
        if (!cancelled) setContributions([]);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  if (contributions === null) {
    return <p className="text-sm" style={{ color: "var(--ink-dim)" }}>Loading…</p>;
  }

  const recent = contributions.slice(-WEEKS * 7);
  const total = recent.reduce((sum, c) => sum + c.count, 0);

  return (
    <div>
      <p className="text-sm mb-2">
        {total} contributions <span style={{ color: "var(--ink-dim)" }}>· last {WEEKS} weeks</span>
      </p>
      <div className="grid grid-flow-col gap-[3px]" style={{ gridTemplateRows: "repeat(7, 9px)" }}>
        {recent.map((day) => (
          <span
            key={day.date}
            title={`${day.date}: ${day.count} contributions`}
            className="w-[9px] h-[9px] rounded-[2px]"
            style={{
              background: "var(--accent)",
              opacity: day.level === 0 ? 0.12 : 0.3 + day.level * 0.18,
            }}
          />
        ))}
      </div>
    </div>
  );
}
