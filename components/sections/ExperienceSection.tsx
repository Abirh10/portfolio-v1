import { experience } from "@/lib/data/experience";
import ExperienceMascot from "@/components/mascots/ExperienceMascot";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="page-experience reveal-stagger relative min-h-screen pt-24 pb-44 px-6 flex flex-col items-center"
    >
      <ExperienceMascot />
      <div className="mb-3 flex items-center gap-1">
        <h2 className="theme-heading text-2xl sm:text-4xl text-center">
          Mission Log
        </h2>
        <span className="theme-accent font-cyber text-2xl sm:text-4xl blink">_</span>
      </div>
      <div className="w-40 h-[3px] mb-12" style={{ background: "var(--theme-accent)", boxShadow: "0 0 8px var(--theme-accent)" }} />
      <div className="flex flex-col gap-6 max-w-2xl w-full">
        {experience.map((entry) => (
          <div
            key={entry.role + entry.org}
            className="theme-card p-6 flex flex-col gap-3"
          >
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
              <h3 className="font-cyber text-base theme-text">
                {entry.role}
              </h3>
              <span className="font-pixel-title text-[9px] theme-text-dim">
                {entry.period}
              </span>
            </div>
            <p className="font-pixel-title text-[11px] theme-subheading">
              {entry.org}
            </p>
            <ul className="flex flex-col gap-2 text-lg theme-text-dim">
              {entry.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-2">
                  <span className="theme-accent shrink-0">▸</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
