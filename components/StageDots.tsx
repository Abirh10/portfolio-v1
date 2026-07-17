"use client";

import { navLinks } from "@/lib/data/navigation";
import { useSceneTransition } from "@/lib/scene-transition/SceneTransitionContext";

/**
 * Right-edge dot rail (old-TV channel markers). Each dot launches its
 * section; the label slides out on hover. Desktop only — on mobile the
 * PSP is the sole navigator.
 */
export default function StageDots() {
  const { launchSection } = useSceneTransition();

  return (
    <nav
      aria-label="Stage shortcuts"
      className="hidden md:flex flex-col gap-4 fixed right-7 top-1/2 -translate-y-1/2 z-20"
    >
      {navLinks.map((link) => (
        <button
          key={link.id}
          type="button"
          onClick={(e) => launchSection(link.id, e.currentTarget, link.label)}
          className="group relative flex items-center justify-center w-4 h-4 cursor-pointer"
          aria-label={`Go to ${link.label}`}
        >
          <span
            className="w-2 h-2 rounded-full transition-all duration-200 group-hover:w-3 group-hover:h-3"
            style={{
              background: "rgba(236, 224, 200, 0.45)",
              boxShadow: "0 0 6px rgba(255, 170, 70, 0.35)",
            }}
          />
          <span
            className="absolute right-6 top-1/2 -translate-y-1/2 font-pixel-title text-[8px] tracking-widest whitespace-nowrap opacity-0 translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 pointer-events-none"
            style={{ color: "#ece0c8", textShadow: "0 0 8px rgba(0,0,0,0.9)" }}
          >
            {link.label}
          </span>
        </button>
      ))}
    </nav>
  );
}
