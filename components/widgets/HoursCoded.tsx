"use client";

import { useEffect, useState } from "react";

// Playful "time spent building" figure, not a literal tracked metric —
// roughly 3 coding-hours per calendar day since picking this up.
const CODING_EPOCH = new Date("2020-01-01T00:00:00Z").getTime();
const HOURS_PER_DAY = 3;

export default function HoursCoded() {
  const [hours, setHours] = useState<number | null>(null);

  useEffect(() => {
    const tick = () => {
      const days = (Date.now() - CODING_EPOCH) / (1000 * 60 * 60 * 24);
      setHours(Math.floor(days * HOURS_PER_DAY));
    };
    tick();
    const interval = setInterval(tick, 30_000);
    return () => clearInterval(interval);
  }, []);

  return (
    <p className="font-mono-data text-2xl sm:text-3xl" style={{ color: "var(--ink)" }}>
      {hours === null ? "—" : hours.toLocaleString()}
      <span className="text-sm ml-1" style={{ color: "var(--ink-dim)" }}>
        hrs
      </span>
    </p>
  );
}
