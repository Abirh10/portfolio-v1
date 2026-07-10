import { about } from "@/lib/data/about";

export default function AboutMeSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen py-24 px-6 flex flex-col items-center justify-center"
    >
      <h2 className="font-pixel-title text-lg sm:text-2xl text-nes-yellow text-outline mb-12 text-center">
        PLAYER PROFILE
      </h2>
      <div className="pixel-border bg-nes-navy/90 p-6 sm:p-8 max-w-xl w-full flex flex-col gap-6">
        <div>
          <p className="font-pixel-title text-sm text-nes-white mb-1">ABIR</p>
          <p className="text-lg text-nes-white/90 leading-relaxed">{about.bio}</p>
        </div>
        <div className="flex flex-col gap-2">
          {about.stats.map((stat) => (
            <div
              key={stat.label}
              className="flex items-center justify-between gap-4 border-t border-nes-gray/30 pt-2"
            >
              <span className="font-pixel-title text-[10px] text-nes-red">
                {stat.label}
              </span>
              <span className="text-lg text-nes-white/90 text-right">
                {stat.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
