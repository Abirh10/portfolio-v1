import { about } from "@/lib/data/about";
import RetroWindow from "@/components/RetroWindow";

export default function AboutMeSection() {
  return (
    <RetroWindow id="about" title="C:\PORTFOLIO\ABOUT.TXT" objCount={about.stats.length + 1}>
      <p className="text-base sm:text-lg leading-relaxed mb-6">{about.bio}</p>
      <div className="flex flex-col gap-2">
        {about.stats.map((stat) => (
          <div
            key={stat.label}
            className="bevel-in flex items-center justify-between gap-4 px-3 py-2 text-sm"
          >
            <span className="font-pixel-title text-[10px] text-win-accent">{stat.label}</span>
            <span className="text-right">{stat.value}</span>
          </div>
        ))}
      </div>
    </RetroWindow>
  );
}
