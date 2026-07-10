import { volunteering } from "@/lib/data/volunteering";
import RetroWindow from "@/components/RetroWindow";

export default function VolunteeringSection() {
  return (
    <RetroWindow
      id="volunteering"
      title="C:\PORTFOLIO\VOLUNTEERING.LOG"
      objCount={volunteering.length}
    >
      <div className="flex flex-col gap-6">
        {volunteering.map((entry) => (
          <div key={entry.role + entry.org} className="bevel-in p-4 sm:p-5 flex flex-col gap-3">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
              <h3 className="font-pixel-title text-sm">{entry.role}</h3>
              {entry.period && (
                <span className="font-pixel-title text-[10px] text-win-text-dim">
                  {entry.period}
                </span>
              )}
            </div>
            <p className="font-pixel-title text-[11px] text-win-accent">{entry.org}</p>
            <ul className="flex flex-col gap-2 text-base">
              {entry.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-2">
                  <span className="text-win-accent shrink-0">▸</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </RetroWindow>
  );
}
