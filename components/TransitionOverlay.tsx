"use client";

import { AnimatePresence, motion } from "framer-motion";

export type TransitionPhase = "idle" | "covering" | "revealing";

export interface OriginRect {
  x: number;
  y: number;
  width: number;
  height: number;
}

export default function TransitionOverlay({
  phase,
  originRect,
  label,
}: {
  phase: TransitionPhase;
  originRect: OriginRect | null;
  label: string;
}) {
  const isVisible = phase !== "idle";
  const viewportW = typeof window !== "undefined" ? window.innerWidth : 0;
  const viewportH = typeof window !== "undefined" ? window.innerHeight : 0;

  return (
    <AnimatePresence>
      {isVisible && originRect && (
        <motion.div
          className="fixed z-[200] overflow-hidden pointer-events-none"
          style={{ background: "#0a0603", boxShadow: "0 0 0 2px rgba(255,180,84,0.35)" }}
          initial={{
            top: originRect.y,
            left: originRect.x,
            width: originRect.width,
            height: originRect.height,
            borderRadius: 16,
            opacity: 0.4,
          }}
          animate={
            phase === "covering"
              ? { top: 0, left: 0, width: viewportW, height: viewportH, borderRadius: 0, opacity: 1 }
              : { top: 0, left: 0, width: viewportW, height: viewportH, borderRadius: 0, opacity: 0 }
          }
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: "easeInOut" }}
        >
          <div className="absolute inset-0" aria-hidden="true">
            <div
              className="absolute inset-0"
              style={{
                background:
                  "repeating-linear-gradient(to bottom, rgba(255,180,84,0.05) 0px, rgba(255,180,84,0.05) 1px, transparent 1px, transparent 3px)",
              }}
            />
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-5">
            <p className="font-pixel-title text-[10px] sm:text-sm tracking-widest animate-pulse text-center px-4" style={{ color: "#ffc46e" }}>
              LOADING {label.toUpperCase()}...
            </p>
            <div
              className="w-40 sm:w-52 h-3 p-[2px] border-2"
              style={{ borderColor: "rgba(255,196,110,0.7)" }}
              role="presentation"
            >
              <div
                className="load-bar-fill h-full"
                style={{
                  background:
                    "repeating-linear-gradient(to right, #ffc46e 0px, #ffc46e 8px, transparent 8px, transparent 11px)",
                }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
