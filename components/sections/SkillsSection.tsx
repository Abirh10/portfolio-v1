import { skillCategories } from "@/lib/data/skills";

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative min-h-screen py-24 px-6 flex flex-col items-center"
    >
      <h2 className="font-pixel-title text-lg sm:text-2xl text-nes-yellow text-outline mb-2 text-center">
        LOADOUT
      </h2>
      <p className="text-lg text-nes-white/70 mb-12 text-center">
        Full inventory — tools, languages, and frameworks from my work and projects.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl w-full">
        {skillCategories.map((category) => (
          <div
            key={category.name}
            className="pixel-border bg-nes-navy/90 p-5"
          >
            <h3 className="font-pixel-title text-xs text-nes-red mb-4">
              {category.name.toUpperCase()}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {category.items.map((item) => (
                <li
                  key={item}
                  className="text-lg px-3 py-1 bg-nes-black text-nes-white"
                >
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
