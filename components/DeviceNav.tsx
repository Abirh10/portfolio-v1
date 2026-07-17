"use client";

import { useCallback, useRef, useState } from "react";
import type { KeyboardEvent } from "react";
import { navLinks } from "@/lib/data/navigation";
import { useSceneTransition } from "@/lib/scene-transition/SceneTransitionContext";

const COUNT = navLinks.length;

// Deterministic star positions (percent), so SSR/CSR markup always match.
const STAR_POSITIONS: [number, number][] = [
  [8, 15], [22, 8], [35, 22], [50, 12], [64, 26], [78, 10], [90, 20],
  [12, 40], [30, 55], [46, 42], [60, 60], [74, 48], [88, 58],
  [18, 78], [40, 85], [58, 80], [82, 82],
];

// Shared tactile feel: lift on hover, sink on press, ring on keyboard focus.
const PRESSABLE =
  "transition-all duration-150 ease-out cursor-pointer " +
  "hover:brightness-115 hover:-translate-y-px " +
  "active:brightness-90 active:scale-95 active:translate-y-[1px] active:duration-75 " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300/70";

function CartridgeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="#ffb454" strokeWidth={1.6}>
      <path d="M12 2 L17 8 V20 A2 2 0 0 1 15 22 H9 A2 2 0 0 1 7 20 V8 Z" strokeLinejoin="round" />
      <circle cx="12" cy="13" r="2.4" />
      <path d="M9 8 H15" />
    </svg>
  );
}

function Screws() {
  const positions = ["top-2 left-2", "top-2 right-2", "bottom-2 left-2", "bottom-2 right-2"];
  return (
    <>
      {positions.map((pos) => (
        <span
          key={pos}
          aria-hidden="true"
          className={`absolute ${pos} w-2 h-2 rounded-full`}
          style={{
            background: "radial-gradient(circle at 35% 35%, #55555c, #101013 70%)",
            boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.6)",
          }}
        />
      ))}
    </>
  );
}

function SpeakerGrille({ align }: { align: "left" | "right" }) {
  return (
    <div
      aria-hidden="true"
      className={`absolute top-1.5 ${align === "left" ? "left-2" : "right-2"} grid grid-cols-3 gap-[3px]`}
    >
      {Array.from({ length: 6 }).map((_, i) => (
        <span key={i} className="w-[3px] h-[3px] rounded-full bg-black/70" />
      ))}
    </div>
  );
}

function ShoulderButton({
  side,
  onClick,
}: {
  side: "L" | "R";
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={side === "L" ? "L shoulder — previous" : "R shoulder — next"}
      className={`absolute -top-3 ${side === "L" ? "left-5" : "right-5"} w-14 h-5 flex items-center justify-center font-pixel-title text-[8px] text-white/60 ${PRESSABLE}`}
      style={{
        background: "linear-gradient(180deg, #45454e, #202024)",
        clipPath:
          side === "L"
            ? "polygon(15% 100%, 0% 40%, 20% 0%, 100% 0%, 100% 100%)"
            : "polygon(85% 100%, 100% 40%, 80% 0%, 0% 0%, 0% 100%)",
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.15), 0 2px 3px rgba(0,0,0,0.5)",
      }}
    >
      {side}
    </button>
  );
}

function DPad({ prev, next }: { prev: () => void; next: () => void }) {
  const hit =
    `absolute flex items-center justify-center text-white/70 text-[11px] leading-none ${PRESSABLE} ` +
    "hover:bg-white/10 active:bg-black/40 rounded-[3px]";
  return (
    <div className="relative w-14 h-14 shrink-0" aria-hidden={false}>
      {/* base plate, plus-shaped */}
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          background: "linear-gradient(150deg, #3c3c44, #16161a)",
          clipPath:
            "polygon(36% 0%, 64% 0%, 64% 36%, 100% 36%, 100% 64%, 64% 64%, 64% 100%, 36% 100%, 36% 64%, 0% 64%, 0% 36%, 36% 36%)",
          boxShadow:
            "inset 0 2px 3px rgba(255,255,255,0.1), inset 0 -3px 4px rgba(0,0,0,0.5), 0 3px 6px rgba(0,0,0,0.5)",
        }}
      />
      <span
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-black/50"
      />
      <button type="button" onClick={prev} aria-label="D-pad left" className={`${hit} left-0 top-1/2 -translate-y-1/2 w-[34%] h-[28%]`}>
        ◄
      </button>
      <button type="button" onClick={next} aria-label="D-pad right" className={`${hit} right-0 top-1/2 -translate-y-1/2 w-[34%] h-[28%]`}>
        ►
      </button>
      <button type="button" onClick={prev} aria-label="D-pad up" className={`${hit} top-0 left-1/2 -translate-x-1/2 w-[28%] h-[34%]`}>
        ▲
      </button>
      <button type="button" onClick={next} aria-label="D-pad down" className={`${hit} bottom-0 left-1/2 -translate-x-1/2 w-[28%] h-[34%]`}>
        ▼
      </button>
    </div>
  );
}

function AnalogNub() {
  const [pressed, setPressed] = useState(false);
  return (
    <button
      type="button"
      aria-label="Analog stick"
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      onMouseLeave={() => setPressed(false)}
      onTouchStart={() => setPressed(true)}
      onTouchEnd={() => setPressed(false)}
      className={`w-7 h-7 rounded-full ${PRESSABLE}`}
      style={{
        background: "radial-gradient(circle at 35% 30%, #6b6b74, #2a2a2f 70%)",
        boxShadow: pressed
          ? "inset 0 3px 5px rgba(0,0,0,0.7)"
          : "inset 0 -2px 3px rgba(0,0,0,0.5), inset 0 2px 2px rgba(255,255,255,0.15), 0 2px 4px rgba(0,0,0,0.6)",
        transform: pressed ? "scale(0.92)" : undefined,
      }}
    >
      <span
        aria-hidden="true"
        className="block w-full h-full rounded-full"
        style={{
          backgroundImage:
            "repeating-radial-gradient(circle at center, transparent 0px, transparent 2px, rgba(0,0,0,0.25) 2.5px)",
        }}
      />
    </button>
  );
}

function FaceButton({
  label,
  color,
  onClick,
  title,
}: {
  label: string;
  color: string;
  onClick: () => void;
  title: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={title}
      title={title}
      className={`w-7 h-7 rounded-full flex items-center justify-center text-[11px] leading-none font-bold ${PRESSABLE}`}
      style={{
        background: "radial-gradient(circle at 35% 30%, #3a3a40, #17171a 75%)",
        border: `1.5px solid ${color}`,
        color,
        boxShadow: `inset 0 1px 2px rgba(255,255,255,0.12), inset 0 -2px 3px rgba(0,0,0,0.5), 0 0 6px ${color}55`,
      }}
    >
      {label}
    </button>
  );
}

function PillButton({
  children,
  onClick,
  title,
  compact = false,
}: {
  children: string;
  onClick: () => void;
  title: string;
  compact?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={title}
      title={title}
      className={`font-pixel-title text-[6px] text-white/60 rounded-full ${compact ? "w-6 h-4 flex items-center justify-center" : "px-2.5 py-1"} ${PRESSABLE}`}
      style={{
        background: "linear-gradient(180deg, #3a3a42, #1c1c20)",
        border: "1px solid rgba(255,255,255,0.1)",
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.08), 0 1px 2px rgba(0,0,0,0.5)",
      }}
    >
      {children}
    </button>
  );
}

export default function DeviceNav() {
  const [index, setIndex] = useState(0);
  // Which way the screen content slides in: 1 = came from the right (next).
  const [dir, setDir] = useState(1);
  const screenRef = useRef<HTMLDivElement>(null);
  const { launchSection, goHome: goHomeCtx } = useSceneTransition();

  const prev = useCallback(() => {
    setDir(-1);
    setIndex((i) => (i - 1 + COUNT) % COUNT);
  }, []);
  const next = useCallback(() => {
    setDir(1);
    setIndex((i) => (i + 1) % COUNT);
  }, []);
  const launch = useCallback(() => {
    const target = navLinks[index];
    launchSection(target.id, screenRef.current, target.label);
  }, [index, launchSection]);
  const goHome = useCallback(() => {
    goHomeCtx(screenRef.current);
  }, [goHomeCtx]);

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      prev();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      next();
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      launch();
    }
  };

  const current = navLinks[index];

  return (
    <div
      className="relative mx-auto select-none outline-none"
      style={{ width: "min(96vw, 460px)" }}
      tabIndex={0}
      role="group"
      aria-label="Quick launch console — left and right to navigate, launch to jump to a section"
      onKeyDown={onKeyDown}
    >
      <div
        className="relative rounded-[30px] px-5 sm:px-7 pt-6 pb-5"
        style={{
          background:
            "radial-gradient(ellipse 140% 100% at 50% -20%, rgba(255,255,255,0.07), transparent 55%), linear-gradient(180deg, #38383f, #131316)",
          boxShadow:
            "0 30px 60px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.08), inset 0 -6px 12px rgba(0,0,0,0.4)",
        }}
      >
        {/* brushed metal texture */}
        <div
          aria-hidden="true"
          className="absolute inset-0 rounded-[30px] pointer-events-none opacity-30"
          style={{
            backgroundImage:
              "repeating-linear-gradient(100deg, rgba(255,255,255,0.05) 0px, rgba(255,255,255,0.05) 1px, transparent 1px, transparent 3px)",
          }}
        />
        {/* memory stick slot */}
        <div
          aria-hidden="true"
          className="hidden sm:block absolute top-1/2 -translate-y-1/2 -right-1 w-2 h-8 rounded-sm"
          style={{ background: "#0a0a0c", boxShadow: "inset 0 0 2px rgba(0,0,0,0.8)" }}
        />
        <Screws />
        <ShoulderButton side="L" onClick={prev} />
        <ShoulderButton side="R" onClick={next} />

        <p
          aria-hidden="true"
          className="absolute top-3 right-6 sm:right-9 font-pixel-title text-[6px] text-white/25 tracking-[0.2em] italic"
        >
          SONY
        </p>

        <div className="flex items-stretch gap-3 sm:gap-4 mt-3">
          {/* d-pad (top) + analog nub (bottom) */}
          <div className="hidden sm:flex flex-col items-center justify-between shrink-0 w-14 py-1">
            <DPad prev={prev} next={next} />
            <AnalogNub />
          </div>

          {/* screen */}
          <div className="flex-1 min-w-0">
            <div
              ref={screenRef}
              className="relative rounded-2xl overflow-hidden"
              style={{
                background: "#0c0703",
                border: "3px solid #33261a",
                boxShadow:
                  "0 0 0 2px rgba(255,180,84,0.22), inset 0 0 24px rgba(255,170,70,0.1), inset 0 2px 6px rgba(0,0,0,0.6)",
              }}
            >
              <SpeakerGrille align="left" />
              <SpeakerGrille align="right" />

              <div className="absolute inset-0" aria-hidden="true">
                {STAR_POSITIONS.map(([x, y], i) => (
                  <span
                    key={i}
                    className="absolute rounded-full bg-white/60"
                    style={{ left: `${x}%`, top: `${y}%`, width: 2, height: 2 }}
                  />
                ))}
              </div>

              {/* scanline texture */}
              <div
                aria-hidden="true"
                className="absolute inset-0 pointer-events-none opacity-40"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(to bottom, rgba(0,0,0,0.35) 0px, rgba(0,0,0,0.35) 1px, transparent 1px, transparent 3px)",
                }}
              />

              {/* glass glare */}
              <div
                aria-hidden="true"
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(115deg, rgba(255,255,255,0.09) 0%, transparent 30%, transparent 70%, rgba(255,255,255,0.04) 100%)",
                }}
              />

              {/* boot flicker, plays once on mount */}
              <div
                aria-hidden="true"
                className="absolute inset-0 pointer-events-none bg-white psp-boot-flash"
              />

              <div
                key={index}
                className={`relative px-4 py-6 flex flex-col items-center ${dir > 0 ? "slide-in-r" : "slide-in-l"}`}
              >
                <p className="font-pixel-title text-[10px] mb-1 tracking-widest" style={{ color: "#ffc46e" }}>
                  ABIR.EXE
                </p>
                <div className="flex items-center gap-1.5 mb-4" aria-label={`${index + 1} of ${COUNT}`}>
                  {navLinks.map((link, i) => (
                    <span
                      key={link.id}
                      aria-hidden="true"
                      className="rounded-full transition-all duration-200"
                      style={{
                        width: i === index ? 10 : 5,
                        height: 5,
                        background: i === index ? "#ffc46e" : "rgba(255,196,110,0.28)",
                        boxShadow: i === index ? "0 0 6px rgba(255,180,84,0.8)" : "none",
                      }}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={launch}
                  className={`flex flex-col items-center gap-2 group rounded-xl ${PRESSABLE}`}
                  aria-label={`Launch ${current.label}`}
                >
                  <span
                    className="w-16 h-16 rounded-xl flex items-center justify-center"
                    style={{
                      border: "2px solid #ffb454",
                      boxShadow: "0 0 16px rgba(255,180,84,0.45)",
                      background: "rgba(255,180,84,0.08)",
                    }}
                  >
                    <CartridgeIcon />
                  </span>
                  <span className="font-pixel-body text-sm group-hover:text-white transition-colors" style={{ color: "#f5e6cb" }}>
                    {current.label}.EXE
                  </span>
                </button>

                <p className="font-pixel-body text-xs mt-4 text-center" style={{ color: "rgba(245,230,203,0.5)" }}>
                  ◄ ► Navigate &nbsp;&nbsp; ✕ Launch
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-1.5 mt-3 flex-wrap">
              <PillButton onClick={goHome} title="Home — back to top" compact>⌂</PillButton>
              <PillButton onClick={prev} title="Volume down (previous)" compact>−</PillButton>
              <PillButton onClick={next} title="Volume up (next)" compact>+</PillButton>
              <PillButton onClick={prev} title="Select — previous">SELECT</PillButton>
              <PillButton onClick={launch} title={`Start — launch ${current.label}`}>START</PillButton>
            </div>
          </div>

          {/* face buttons (top) + PSP wordmark (bottom) */}
          <div className="hidden sm:flex flex-col items-center justify-between shrink-0 w-16 py-1">
            <div className="grid grid-cols-3 grid-rows-3 gap-1 place-items-center">
              <span />
              <FaceButton label="△" color="#4ade80" onClick={goHome} title="Triangle — home" />
              <span />
              <FaceButton label="□" color="#f472b6" onClick={prev} title="Square — previous" />
              <span />
              <FaceButton label="○" color="#f87171" onClick={launch} title="Circle — launch" />
              <span />
              <FaceButton label="✕" color="#60a5fa" onClick={launch} title="Cross — launch" />
              <span />
            </div>
            <p className="font-pixel-title text-[9px] text-white/40 tracking-wide">PSP</p>
          </div>
        </div>

        {/* status LEDs */}
        <div className="hidden sm:flex items-center justify-between mt-3 px-1">
          <span className="w-1.5 h-1.5 rounded-full bg-orange-400/80" aria-hidden="true" title="Charge indicator" />
          <span className="flex items-center gap-1.5" aria-hidden="true">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_2px_rgba(52,211,153,0.6)] animate-pulse" />
            <span className="font-pixel-title text-[6px] text-white/30">POWER</span>
          </span>
        </div>

        {/* compact controls for small screens */}
        <div className="flex sm:hidden items-center justify-between mt-4 gap-2">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous"
            className={`px-4 py-2 rounded-lg bg-neutral-800 text-white/70 font-pixel-title text-xs ${PRESSABLE}`}
          >
            ◄
          </button>
          <button
            type="button"
            onClick={launch}
            className={`flex-1 px-4 py-2 rounded-lg bg-neutral-800 text-amber-300 font-pixel-title text-[10px] ${PRESSABLE}`}
          >
            ✕ LAUNCH
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next"
            className={`px-4 py-2 rounded-lg bg-neutral-800 text-white/70 font-pixel-title text-xs ${PRESSABLE}`}
          >
            ►
          </button>
        </div>
      </div>

      {/* real links underneath for no-js / assistive tech */}
      <ul className="sr-only">
        {navLinks.map((link) => (
          <li key={link.id}>
            <a href={`#${link.id}`}>{link.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
