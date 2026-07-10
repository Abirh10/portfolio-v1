"use client";

import { useEffect, useState } from "react";

export default function EarthRotating() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const tick = () =>
      setTime(new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit" }));
    tick();
    const interval = setInterval(tick, 1000 * 15);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-3">
      <span
        className="spin shrink-0 w-9 h-9 rounded-full"
        style={{
          background:
            "conic-gradient(from 90deg, var(--accent) 0deg 150deg, var(--surface) 150deg 360deg)",
          border: "1px solid var(--border)",
        }}
      />
      <div>
        <p className="font-mono-data text-lg" style={{ color: "var(--ink)" }}>
          {time ?? "—:—"}
        </p>
        <p className="text-xs" style={{ color: "var(--ink-dim)" }}>
          Windsor, ON — still spinning
        </p>
      </div>
    </div>
  );
}
