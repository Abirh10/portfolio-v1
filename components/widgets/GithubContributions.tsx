"use client";

import { useEffect, useState } from "react";

type Contribution = { date: string; count: number; level: number };

const WEEKS = 16;

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
    return <p className="text-sm text-win-text-dim">Loading contribution history…</p>;
  }

  const recent = contributions.slice(-WEEKS * 7);
  const total = recent.reduce((sum, c) => sum + c.count, 0);

  return (
    <div>
      <p className="text-sm mb-3">{total} contributions in the last {WEEKS} weeks</p>
      <div
        className="grid grid-flow-col gap-[3px]"
        style={{ gridTemplateRows: "repeat(7, 10px)" }}
      >
        {recent.map((day) => (
          <span
            key={day.date}
            title={`${day.date}: ${day.count} contributions`}
            className="w-[10px] h-[10px]"
            style={{
              background: "var(--win-accent)",
              opacity: day.level === 0 ? 0.12 : 0.25 + day.level * 0.2,
            }}
          />
        ))}
      </div>
    </div>
  );
}
