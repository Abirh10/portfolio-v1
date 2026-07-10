"use client";

import { motion } from "framer-motion";

export default function SpeechBubble({ message }: { message: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.6 }}
      transition={{ type: "spring", stiffness: 420, damping: 20 }}
      className="absolute right-full top-1/2 -translate-y-1/2 mr-3 w-max max-w-[200px] pointer-events-none"
    >
      <div className="pixel-border bg-nes-gray text-nes-black text-sm font-pixel-title leading-relaxed px-3 py-2 text-center">
        {message}
      </div>
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-[calc(100%+8px)]"
        style={{
          width: 0,
          height: 0,
          borderTop: "8px solid transparent",
          borderBottom: "8px solid transparent",
          borderLeft: "8px solid var(--nes-white)",
        }}
      />
    </motion.div>
  );
}
