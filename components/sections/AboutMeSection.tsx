import { about } from "@/lib/data/about";
import AboutMascot from "@/components/mascots/AboutMascot";

function HudBracket({ flip = false }: { flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 20 20"
      className={`w-4 h-4 sm:w-5 sm:h-5 ${flip ? "scale-x-[-1]" : ""}`}
      aria-hidden="true"
    >
      <path
        d="M2 8 V3 H8"
        fill="none"
        stroke="var(--nes-yellow)"
        strokeWidth={2.5}
      />
      <path d="M2 12 V17 H8" fill="none" stroke="var(--nes-yellow)" strokeWidth={2.5} />
    </svg>
  );
}

export default function AboutMeSection() {
  return (
    <section
      id="about"
      className="page-about reveal-stagger relative min-h-screen pt-24 pb-44 px-6 flex flex-col items-center justify-center"
    >
      <AboutMascot />
      <div className="flex items-center gap-3 mb-12">
        <HudBracket />
        <h2 className="theme-heading text-2xl sm:text-4xl text-center">
          PLAYER PROFILE
        </h2>
        <HudBracket flip />
      </div>
      <div className="theme-card p-6 sm:p-8 max-w-xl w-full flex flex-col gap-6">
        <div>
          <p className="font-pixel-title text-sm theme-text mb-1">ABIR</p>
          <p className="text-lg theme-text-dim leading-relaxed">{about.bio}</p>
        </div>
        <div className="flex flex-col gap-2">
          {about.stats.map((stat) => (
            <div
              key={stat.label}
              className="flex items-center justify-between gap-4 border-t border-nes-gray/30 pt-2"
            >
              <span className="font-pixel-title text-[10px] theme-accent">
                {stat.label}
              </span>
              <span className="text-lg theme-text text-right">
                {stat.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
