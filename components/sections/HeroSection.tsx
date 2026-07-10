import { navLinks } from "@/lib/data/navigation";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6"
    >
      <p className="font-pixel-title text-[10px] sm:text-xs text-nes-yellow text-outline mb-6 tracking-widest">
        1986 &nbsp;·&nbsp; PORTFOLIO CORPS
      </p>
      <h1 className="font-pixel-title text-2xl sm:text-4xl md:text-5xl text-nes-white text-outline leading-relaxed mb-4">
        ABIR
      </h1>
      <p className="font-pixel-title text-xs sm:text-sm text-nes-red text-outline mb-10">
        SOFTWARE ENGINEER
      </p>
      <p className="max-w-md text-lg sm:text-xl text-nes-white/90 mb-10">
        Building software one stage at a time. Scroll down to advance the mission,
        or warp straight to a stage below.
      </p>

      <nav aria-label="Jump to section" className="mb-14">
        <p className="font-pixel-title text-[10px] text-nes-yellow mb-4">
          SELECT A STAGE
        </p>
        <ul className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-xl">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="pixel-border block bg-nes-navy/90 px-3 py-2 font-pixel-title text-[10px] text-nes-white hover:bg-nes-blue transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <p className="font-pixel-title text-[10px] sm:text-xs text-nes-white blink">
        ▼ PRESS SCROLL TO START ▼
      </p>
    </section>
  );
}
