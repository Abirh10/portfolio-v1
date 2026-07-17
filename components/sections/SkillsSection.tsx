import { skillCategories } from "@/lib/data/skills";
import LoadoutMascot from "@/components/mascots/LoadoutMascot";

function TorchFlourish({ flip = false }: { flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 16 24"
      className={`w-4 h-6 sm:w-5 sm:h-8 ${flip ? "scale-x-[-1]" : ""}`}
      aria-hidden="true"
    >
      <rect x={6} y={12} width={4} height={12} fill="#3f342a" />
      <polygon points="2,14 8,4 14,14" fill="var(--nes-sun)" />
      <polygon points="5,13 8,7 11,13" fill="var(--nes-sun-core)" />
    </svg>
  );
}

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="page-skills reveal-stagger relative min-h-screen pt-24 pb-44 px-6 flex flex-col items-center"
    >
      <LoadoutMascot />
      <div className="flex items-center gap-3 mb-2">
        <TorchFlourish />
        <h2 className="theme-heading text-2xl sm:text-4xl text-center">
          Loadout
        </h2>
        <TorchFlourish flip />
      </div>
      <p className="text-lg theme-text-dim mb-12 text-center">
        Full inventory — tools, languages, and frameworks from my work and projects.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl w-full">
        {skillCategories.map((category) => (
          <div key={category.name} className="theme-card p-5">
            <h3 className="font-pixel-title text-xs theme-accent mb-4">
              {category.name.toUpperCase()}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {category.items.map((item) => (
                <li key={item} className="theme-tag text-lg px-3 py-1">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
