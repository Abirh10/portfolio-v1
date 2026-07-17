"use client";

import { createContext, useCallback, useContext, useRef, useState } from "react";
import type { ReactNode } from "react";
import { useReducedMotion } from "framer-motion";
import TransitionOverlay from "@/components/TransitionOverlay";
import type { OriginRect, TransitionPhase } from "@/components/TransitionOverlay";

const COVER_MS = 450;
const REVEAL_MS = 450;

interface SceneTransitionValue {
  /** Which view is currently mounted: "hero" or a section id. */
  activeView: string;
  launchSection: (id: string, originEl: HTMLElement | null, label: string) => void;
  goHome: (originEl: HTMLElement | null) => void;
}

const SceneTransitionContext = createContext<SceneTransitionValue | null>(null);

export function useSceneTransition() {
  const ctx = useContext(SceneTransitionContext);
  if (!ctx) {
    throw new Error("useSceneTransition must be used within SceneTransitionProvider");
  }
  return ctx;
}

export function SceneTransitionProvider({ children }: { children: ReactNode }) {
  const [activeView, setActiveView] = useState("hero");
  const [phase, setPhase] = useState<TransitionPhase>("idle");
  const [originRect, setOriginRect] = useState<OriginRect | null>(null);
  const [label, setLabel] = useState("");
  const reduceMotion = useReducedMotion();
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  const clearTimers = useCallback(() => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  }, []);

  const launchSection = useCallback(
    (id: string, originEl: HTMLElement | null, sectionLabel: string) => {
      if (reduceMotion || !originEl) {
        window.scrollTo(0, 0);
        setActiveView(id);
        return;
      }

      clearTimers();
      const rect = originEl.getBoundingClientRect();
      setOriginRect({ x: rect.x, y: rect.y, width: rect.width, height: rect.height });
      setLabel(sectionLabel);
      setPhase("covering");

      timers.current.push(
        setTimeout(() => {
          window.scrollTo(0, 0);
          setActiveView(id);
          setPhase("revealing");

          timers.current.push(
            setTimeout(() => {
              setPhase("idle");
              setOriginRect(null);
            }, REVEAL_MS)
          );
        }, COVER_MS)
      );
    },
    [reduceMotion, clearTimers]
  );

  const goHome = useCallback(
    (originEl: HTMLElement | null) => {
      launchSection("hero", originEl, "Home");
    },
    [launchSection]
  );

  return (
    <SceneTransitionContext.Provider value={{ activeView, launchSection, goHome }}>
      {children}
      <TransitionOverlay phase={phase} originRect={originRect} label={label} />
    </SceneTransitionContext.Provider>
  );
}
