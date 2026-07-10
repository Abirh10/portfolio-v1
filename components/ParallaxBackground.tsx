"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import {
  FarMountains,
  JungleCanopy,
  GroundStrip,
  VineOverlay,
  Clouds,
  Sun,
} from "./sprites/Skyline";

const LAYER_WIDTH = 1600;

export default function ParallaxBackground() {
  const { scrollYProgress } = useScroll();
  const reduceMotion = useReducedMotion();

  const cloudsX = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : -90]);
  const mountainsX = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : -220]);
  const canopyX = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : -480]);
  const groundX = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : -820]);
  const vineX = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : -60]);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      {/* sky gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, var(--nes-navy) 0%, var(--nes-blue) 40%, var(--nes-sky) 65%, var(--nes-orange) 88%, var(--nes-red-dark) 100%)",
        }}
      />

      {/* sun, low on the horizon */}
      <div className="absolute right-[12%] top-[18%] opacity-90">
        <Sun />
      </div>

      {/* drifting clouds */}
      <motion.div className="absolute top-0 left-0 flex opacity-70" style={{ x: cloudsX }}>
        <Clouds width={LAYER_WIDTH} />
        <Clouds width={LAYER_WIDTH} />
      </motion.div>

      {/* far ridge + ruins silhouette (internally doubled) */}
      <motion.div className="absolute bottom-24 left-0" style={{ x: mountainsX }}>
        <FarMountains width={LAYER_WIDTH} />
      </motion.div>

      {/* jungle canopy */}
      <motion.div
        className="absolute bottom-16 left-0 flex opacity-95"
        style={{ x: canopyX }}
      >
        <JungleCanopy width={LAYER_WIDTH} />
        <JungleCanopy width={LAYER_WIDTH} />
      </motion.div>

      {/* ground the character walks on */}
      <motion.div className="absolute bottom-0 left-0 flex" style={{ x: groundX }}>
        <GroundStrip width={LAYER_WIDTH} />
        <GroundStrip width={LAYER_WIDTH} />
      </motion.div>

      {/* foreground hanging vines, framing the top of the screen */}
      <motion.div
        className="absolute top-0 left-0 flex opacity-85"
        style={{ x: vineX }}
      >
        <VineOverlay width={LAYER_WIDTH} />
        <VineOverlay width={LAYER_WIDTH} />
      </motion.div>
    </div>
  );
}
