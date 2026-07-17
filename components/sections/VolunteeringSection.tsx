import { volunteering } from "@/lib/data/volunteering";
import VolunteeringMascot from "@/components/mascots/VolunteeringMascot";

function LeafFlourish({ flip = false }: { flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 24 16"
      className={`w-6 h-4 sm:w-8 sm:h-5 ${flip ? "scale-x-[-1]" : ""}`}
      aria-hidden="true"
    >
      <path
        d="M2 14 Q10 2 22 4 Q14 6 12 14 Q10 8 2 14 Z"
        fill="var(--nes-green)"
        stroke="var(--nes-green-dark)"
        strokeWidth={0.6}
      />
    </svg>
  );
}

export default function VolunteeringSection() {
  return (
    <section
      id="volunteering"
      className="page-volunteering reveal-stagger relative min-h-screen pt-24 pb-44 px-6 flex flex-col items-center"
    >
      <VolunteeringMascot />
      <div className="flex items-center gap-3 mb-12">
        <LeafFlourish />
        <h2 className="theme-heading text-2xl sm:text-4xl text-center">
          SIDE QUESTS
        </h2>
        <LeafFlourish flip />
      </div>
      <div className="flex flex-col gap-6 max-w-2xl w-full">
        {volunteering.map((entry) => (
          <div
            key={entry.role + entry.org}
            className="theme-card p-6 flex flex-col gap-3"
          >
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
              <h3 className="font-arcade text-sm theme-text">
                {entry.role}
              </h3>
              {entry.period && (
                <span className="font-pixel-title text-[9px] theme-text-dim">
                  {entry.period}
                </span>
              )}
            </div>
            <p className="font-pixel-title text-[11px] theme-subheading">
              {entry.org}
            </p>
            <ul className="flex flex-col gap-2 text-lg theme-text-dim">
              {entry.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-2">
                  <span className="theme-accent shrink-0">❧</span>
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
