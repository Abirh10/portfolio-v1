"use client";

import { motion } from "framer-motion";

export default function SpeechBubble({
  message,
  placement = "top",
}: {
  message: string;
  placement?: "top" | "left";
}) {
  // "top" anchors to the right edge (not centered) so the bubble grows
  // inward — the mascot sits ~20px from the viewport edge, and a centered
  // 200px bubble would always clip off-screen.
  const wrapperClass =
    placement === "top"
      ? "absolute bottom-full right-0 mb-3"
      : "absolute right-full top-1/2 -translate-y-1/2 mr-3";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.6 }}
      transition={{ type: "spring", stiffness: 420, damping: 20 }}
      className={`${wrapperClass} w-max max-w-[200px] pointer-events-none`}
    >
      <div className="theme-card theme-text text-sm font-pixel-title leading-relaxed px-3 py-2 text-center">
        {message}
      </div>
      {placement === "top" ? (
        <div
          className="absolute right-8 top-full"
          style={{
            width: 0,
            height: 0,
            borderLeft: "8px solid transparent",
            borderRight: "8px solid transparent",
            borderTop: "8px solid var(--theme-border-color)",
          }}
        />
      ) : (
        <div
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-[calc(100%+8px)]"
          style={{
            width: 0,
            height: 0,
            borderTop: "8px solid transparent",
            borderBottom: "8px solid transparent",
            borderLeft: "8px solid var(--theme-border-color)",
          }}
        />
      )}
    </motion.div>
  );
}
