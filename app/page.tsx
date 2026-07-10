import SiteNav from "@/components/v3/SiteNav";
import HeroSection from "@/components/sections/HeroSection";
import AboutMeSection from "@/components/sections/AboutMeSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import VolunteeringSection from "@/components/sections/VolunteeringSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import NowSection from "@/components/sections/NowSection";
import ContactSection from "@/components/sections/ContactSection";
import ResumeSection from "@/components/sections/ResumeSection";

export default function Home() {
  return (
    <>
      <div className="atmosphere-glow" />
      <SiteNav />
      <main className="relative flex flex-col gap-8 px-4 py-10">
        <HeroSection />
        <AboutMeSection />
        <ExperienceSection />
        <VolunteeringSection />
        <ProjectsSection />
        <SkillsSection />
        <NowSection />
        <ContactSection />
        <ResumeSection />
      </main>
    </>
  );
}
