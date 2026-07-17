"use client";

import type { ComponentType } from "react";
import { useSceneTransition } from "@/lib/scene-transition/SceneTransitionContext";
import HomeButton from "@/components/HomeButton";
import HeroSection from "@/components/sections/HeroSection";
import AboutMeSection from "@/components/sections/AboutMeSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import VolunteeringSection from "@/components/sections/VolunteeringSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ContactSection from "@/components/sections/ContactSection";
import ResumeSection from "@/components/sections/ResumeSection";

const SECTIONS: Record<string, ComponentType> = {
  about: AboutMeSection,
  experience: ExperienceSection,
  volunteering: VolunteeringSection,
  projects: ProjectsSection,
  skills: SkillsSection,
  contact: ContactSection,
  resume: ResumeSection,
};

export default function ViewSwitcher() {
  const { activeView } = useSceneTransition();

  if (activeView === "hero") {
    return (
      <main className="relative h-dvh overflow-y-auto retro-scroll">
        <HeroSection />
      </main>
    );
  }

  const ActiveSection = SECTIONS[activeView];
  if (!ActiveSection) return null;

  return (
    <div className={`page-${activeView}`}>
      <HomeButton />
      <main className="relative h-dvh overflow-y-auto retro-scroll">
        <ActiveSection />
      </main>
    </div>
  );
}
