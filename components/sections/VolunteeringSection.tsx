import { volunteering } from "@/lib/data/volunteering";
import SectionCard from "@/components/v3/SectionCard";

export default function VolunteeringSection() {
  return (
    <SectionCard
      id="volunteering"
      label="03 · Volunteering"
      title="Outside of work"
      art={{ colorA: "#cfe0d8", colorB: "#fbf8ee", seed: 3 }}
    >
      <div className="flex flex-col gap-5">
        {volunteering.map((entry) => (
          <div key={entry.role + entry.org} className="card p-5" style={{ background: "var(--surface-dim)" }}>
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
              <h3 className="font-serif-accent text-lg">{entry.role}</h3>
              {entry.period && <span className="label">{entry.period}</span>}
            </div>
            <p className="text-sm mb-3" style={{ color: "var(--accent)" }}>
              {entry.org}
            </p>
            <ul className="flex flex-col gap-2 text-sm sm:text-base" style={{ color: "var(--ink-dim)" }}>
              {entry.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-2">
                  <span className="shrink-0" style={{ color: "var(--accent)" }}>
                    ▸
                  </span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SectionCard>
  );
}
