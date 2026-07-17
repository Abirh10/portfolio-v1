"use client";

import { useRef } from "react";
import { useSceneTransition } from "@/lib/scene-transition/SceneTransitionContext";

export default function HomeButton() {
  const ref = useRef<HTMLButtonElement>(null);
  const { goHome } = useSceneTransition();

  return (
    <button
      ref={ref}
      type="button"
      aria-label="Back to home screen"
      onClick={() => goHome(ref.current)}
      className="theme-btn reveal fixed top-4 left-4 z-40 px-3 py-2 text-[10px]"
    >
      ⌂ HOME
    </button>
  );
}
