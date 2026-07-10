import DitherBackground from "@/components/DitherBackground";
import DesktopIcons from "@/components/DesktopIcons";
import Taskbar from "@/components/Taskbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutMeSection from "@/components/sections/AboutMeSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import VolunteeringSection from "@/components/sections/VolunteeringSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import DashboardSection from "@/components/sections/DashboardSection";
import ContactSection from "@/components/sections/ContactSection";
import ResumeSection from "@/components/sections/ResumeSection";

export default function Home() {
  return (
    <>
      <DitherBackground />
      <DesktopIcons />
      <main className="relative flex flex-col gap-10 px-4 sm:px-8 py-10 pb-20">
        <HeroSection />
        <AboutMeSection />
        <ExperienceSection />
        <VolunteeringSection />
        <ProjectsSection />
        <SkillsSection />
        <DashboardSection />
        <ContactSection />
        <ResumeSection />
      </main>
      <Taskbar />
    </>
  );
}
