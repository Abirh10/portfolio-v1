import { skillCategories } from "@/lib/data/skills";
import SectionCard from "@/components/v3/SectionCard";

export default function SkillsSection() {
  return (
    <SectionCard
      id="skills"
      label="05 · Skills"
      title="What I reach for"
      art={{ colorA: "#e6cdd6", colorB: "#fbf6f0", seed: 5 }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {skillCategories.map((category) => (
          <div key={category.name} className="card p-4" style={{ background: "var(--surface-dim)" }}>
            <p className="label mb-3">{category.name}</p>
            <ul className="flex flex-wrap gap-2">
              {category.items.map((item) => (
                <li
                  key={item}
                  className="text-sm px-2.5 py-1 rounded-full"
                  style={{ border: "1px solid var(--border)" }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SectionCard>
  );
}
