"use client";

import { useEffect, useState } from "react";

// Purely whimsical — an estimated two cups a day since the same coding epoch.
const CODING_EPOCH = new Date("2020-01-01T00:00:00Z").getTime();
const CUPS_PER_DAY = 2;

export default function CoffeesDrunk() {
  const [cups, setCups] = useState<number | null>(null);

  useEffect(() => {
    const tick = () => {
      const days = (Date.now() - CODING_EPOCH) / (1000 * 60 * 60 * 24);
      setCups(Math.floor(days * CUPS_PER_DAY));
    };
    tick();
    const interval = setInterval(tick, 30_000);
    return () => clearInterval(interval);
  }, []);

  return (
    <p className="font-mono-data text-2xl sm:text-3xl" style={{ color: "var(--ink)" }}>
      {cups === null ? "—" : cups.toLocaleString()}
      <span className="text-sm ml-1" style={{ color: "var(--ink-dim)" }}>
        cups (est.)
      </span>
    </p>
  );
}
