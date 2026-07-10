import { experience } from "@/lib/data/experience";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative min-h-screen py-24 px-6 flex flex-col items-center"
    >
      <h2 className="font-pixel-title text-lg sm:text-2xl text-nes-yellow text-outline mb-12 text-center">
        MISSION LOG
      </h2>
      <div className="flex flex-col gap-6 max-w-2xl w-full">
        {experience.map((entry) => (
          <div
            key={entry.role + entry.org}
            className="pixel-border bg-nes-navy/90 p-6 flex flex-col gap-3"
          >
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
              <h3 className="font-pixel-title text-sm text-nes-white">
                {entry.role}
              </h3>
              <span className="font-pixel-title text-[10px] text-nes-white/50">
                {entry.period}
              </span>
            </div>
            <p className="font-pixel-title text-[11px] text-nes-yellow">
              {entry.org}
            </p>
            <ul className="flex flex-col gap-2 text-lg text-nes-white/90">
              {entry.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-2">
                  <span className="text-nes-green shrink-0">▸</span>
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
