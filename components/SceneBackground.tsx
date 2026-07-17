"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useSceneTransition } from "@/lib/scene-transition/SceneTransitionContext";
import ContraTheme from "@/components/themes/ContraTheme";
import CyberCityTheme from "@/components/themes/CyberCityTheme";
import VillageTheme from "@/components/themes/VillageTheme";
import SkyPlatformTheme from "@/components/themes/SkyPlatformTheme";
import DungeonTheme from "@/components/themes/DungeonTheme";
import SignalTowerTheme from "@/components/themes/SignalTowerTheme";
import LibraryTheme from "@/components/themes/LibraryTheme";

const THEMES: Record<string, React.ComponentType> = {
  about: ContraTheme,
  experience: CyberCityTheme,
  volunteering: VillageTheme,
  projects: SkyPlatformTheme,
  skills: DungeonTheme,
  contact: SignalTowerTheme,
  resume: LibraryTheme,
};

export default function SceneBackground() {
  const { activeView } = useSceneTransition();
  const Theme = THEMES[activeView];

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-nes-black">
      <AnimatePresence mode="sync">
        {Theme && (
          <motion.div
            key={activeView}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <Theme />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
