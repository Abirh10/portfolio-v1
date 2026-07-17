import DeviceNav from "@/components/DeviceNav";
import CelestialResonance from "@/components/CelestialResonance";
import StageDots from "@/components/StageDots";

/** Slow-spinning circular wordmark, bottom-left — festival-badge flavor. */
function SpinBadge() {
  return (
    <div
      aria-hidden="true"
      className="hidden sm:block absolute bottom-6 left-6 z-20 w-24 h-24 animate-[spin_16s_linear_infinite] opacity-80"
    >
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <defs>
          <path id="badge-circle" d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
        </defs>
        <circle cx="50" cy="50" r="47" fill="rgba(10,5,0,0.5)" stroke="rgba(236,224,200,0.35)" strokeWidth="1" />
        <text
          fill="#ece0c8"
          fontSize="10.5"
          letterSpacing="2.5"
          style={{ fontFamily: "var(--font-pixel-title), monospace" }}
        >
          <textPath href="#badge-circle">PRESS START · EST 2004 ·</textPath>
        </text>
        <text
          x="50"
          y="56"
          textAnchor="middle"
          fill="#ece0c8"
          fontSize="16"
          style={{ fontFamily: "var(--font-pixel-title), monospace" }}
        >
          ▶
        </text>
      </svg>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden"
    >
      <CelestialResonance
        className="absolute inset-0 z-0"
        particleCount={700}
        particleSpeed={0.08}
        particleLife={500}
        trailOpacity={0.035}
        hueSpeed={0}
        hueStart={22}
        particleRadius={1.6}
        canvasGlow={14}
        background="#0a0502"
        trailRGB="10,5,2"
      />

      {/* Warm tube light-leak, strongest in the top-left like an old set */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 75% 65% at 10% 0%, rgba(255, 145, 40, 0.26), transparent 62%), radial-gradient(ellipse 50% 40% at 95% 100%, rgba(255, 120, 30, 0.1), transparent 60%)",
          mixBlendMode: "screen",
        }}
      />

      <StageDots />
      <SpinBadge />

      <div className="reveal-stagger relative z-10 flex flex-col items-center">
        <p
          className="font-library text-xs sm:text-base uppercase tracking-[0.12em] sm:tracking-[0.28em] px-4 sm:px-5 py-2 mb-10 whitespace-nowrap"
          style={{
            color: "#ece0c8",
            border: "1px solid rgba(236, 224, 200, 0.45)",
            borderRadius: 8,
            background: "rgba(18, 9, 0, 0.45)",
            boxShadow: "0 0 26px rgba(245, 160, 50, 0.14), inset 0 0 14px rgba(245, 160, 50, 0.06)",
          }}
        >
          Abir Hirani &nbsp;·&nbsp; Portfolio Corps
        </p>

        <p className="font-library uppercase tracking-[0.14em] text-xl sm:text-2xl leading-snug text-nes-cloud/90 mb-3">
          The world
          <br />
          witnessed the
          <br />
          boot of
        </p>

        {/* Giant terminal-phosphor wordmark: VT323 with RGB fringe shadows,
            like a badly converged CRT gun — cream core, warm halo. */}
        <h1
          className="text-8xl sm:text-9xl md:text-[11rem] leading-[0.85] mb-5 tracking-wide"
          style={{
            fontFamily: "var(--font-pixel-body), monospace",
            color: "#f2e8d5",
            textShadow:
              "3px 0 rgba(255, 70, 50, 0.5), -3px 0 rgba(70, 130, 255, 0.45), 0 0 34px rgba(255, 165, 60, 0.5), 0 0 90px rgba(230, 110, 30, 0.25)",
          }}
        >
          ABIR
        </h1>

        <p className="font-library italic text-lg sm:text-2xl text-nes-cloud/85 max-w-lg mb-12">
          a software engineer, and his power to turn ideas into working
          systems.
        </p>

        <div className="w-full">
          <p
            className="font-pixel-title text-[10px] mb-4 blink"
            style={{ color: "#ece0c8" }}
          >
            ▼ SELECT A STAGE ▼
          </p>
          <DeviceNav />
        </div>
      </div>
    </section>
  );
}
