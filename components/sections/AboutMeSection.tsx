import { about } from "@/lib/data/about";
import SectionCard from "@/components/v3/SectionCard";

export default function AboutMeSection() {
  return (
    <SectionCard
      id="about"
      label="01 · About"
      title="A little context"
      art={{ colorA: "#e9ecf9", colorB: "#ffffff", seed: 1 }}
    >
      <p className="text-base sm:text-lg mb-6">{about.bio}</p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {about.stats.map((stat) => (
          <div key={stat.label} className="card p-4" style={{ background: "var(--surface-dim)" }}>
            <p className="label mb-1">{stat.label}</p>
            <p className="text-sm">{stat.value}</p>
          </div>
        ))}
      </div>
    </SectionCard>
  );
}
