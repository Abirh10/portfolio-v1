import { skillCategories } from "@/lib/data/skills";
import RetroWindow from "@/components/RetroWindow";

export default function SkillsSection() {
  return (
    <RetroWindow id="skills" title="C:\PORTFOLIO\CONTROL PANEL\SKILLS" objCount={skillCategories.length}>
      <p className="text-sm text-win-text-dim mb-6">
        Full inventory — languages, frameworks, and tools from my work and projects.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {skillCategories.map((category) => (
          <div key={category.name} className="bevel-in p-4">
            <h3 className="font-pixel-title text-xs text-win-accent mb-3">
              {category.name.toUpperCase()}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {category.items.map((item) => (
                <li key={item} className="bevel-out text-sm px-2 py-1 font-pixel-body">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </RetroWindow>
  );
}
