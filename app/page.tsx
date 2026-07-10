import ParallaxBackground from "@/components/ParallaxBackground";
import ContraCharacter from "@/components/ContraCharacter";
import HeroSection from "@/components/sections/HeroSection";
import AboutMeSection from "@/components/sections/AboutMeSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import VolunteeringSection from "@/components/sections/VolunteeringSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ContactSection from "@/components/sections/ContactSection";
import ResumeSection from "@/components/sections/ResumeSection";

export default function Home() {
  return (
    <>
      <ParallaxBackground />
      <ContraCharacter />
      <main className="relative">
        <HeroSection />
        <AboutMeSection />
        <ExperienceSection />
        <VolunteeringSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
        <ResumeSection />
      </main>
    </>
  );
}
