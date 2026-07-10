"use client";

import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import Soldier, { SoldierFrame } from "./sprites/Soldier";
import Ladder from "./sprites/Ladder";
import SpeechBubble from "./SpeechBubble";
import { sectionIds, sectionMessages } from "@/lib/data/messages";

const CLIMB_FRAMES: SoldierFrame[] = ["climb1", "climb2"];
const CLIMB_STOP_DELAY = 150;
const FRAME_INTERVAL = 180;
const SPRITE_CLASS = "w-7 sm:w-10 h-auto drop-shadow-[2px_2px_0_rgba(0,0,0,0.6)]";

/** Tracks which section is currently centered in the viewport. */
function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0]);
  const intersecting = useRef<Record<string, boolean>>({});

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          intersecting.current[entry.target.id] = entry.isIntersecting;
        }
        const current = ids.find((id) => intersecting.current[id]);
        if (current) setActive(current);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids]);

  return active;
}

export default function ContraCharacter() {
  const { scrollYProgress } = useScroll();
  const reduceMotion = useReducedMotion();

  const top = useTransform(scrollYProgress, (v) => `${4 + v * 82}%`);

  const [isClimbing, setIsClimbing] = useState(false);
  const [frameIndex, setFrameIndex] = useState(0);
  const stopTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const activeSection = useActiveSection(sectionIds);
  const message = sectionMessages[activeSection];

  useMotionValueEvent(scrollYProgress, "change", () => {
    if (reduceMotion) return;
    setIsClimbing(true);
    if (stopTimer.current) clearTimeout(stopTimer.current);
    stopTimer.current = setTimeout(() => setIsClimbing(false), CLIMB_STOP_DELAY);
  });

  useEffect(() => {
    if (!isClimbing) return;
    const id = setInterval(() => {
      setFrameIndex((i) => (i + 1) % CLIMB_FRAMES.length);
    }, FRAME_INTERVAL);
    return () => clearInterval(id);
  }, [isClimbing]);

  useEffect(() => {
    return () => {
      if (stopTimer.current) clearTimeout(stopTimer.current);
    };
  }, []);

  const frame: SoldierFrame = isClimbing ? CLIMB_FRAMES[frameIndex] : "idle";

  return (
    <div
      className="fixed right-1 sm:right-8 top-0 h-dvh w-7 sm:w-10 z-10 pointer-events-none"
      aria-hidden="true"
    >
      <Ladder className="absolute inset-0" />

      {reduceMotion ? (
        <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full">
          <div className="relative">
            <AnimatePresence mode="wait">
              <SpeechBubble key={message} message={message} />
            </AnimatePresence>
            <Soldier frame="idle" className={SPRITE_CLASS} />
          </div>
        </div>
      ) : (
        <motion.div className="absolute left-0 w-full" style={{ top }}>
          <div className="relative">
            <AnimatePresence mode="wait">
              <SpeechBubble key={message} message={message} />
            </AnimatePresence>
            <Soldier frame={frame} className={SPRITE_CLASS} />
          </div>
        </motion.div>
      )}
    </div>
  );
}
