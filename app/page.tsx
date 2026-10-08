import { AboutSection } from "@/components/sections/about";
import { ContactSection } from "@/components/sections/contact";
import { ExperienceSection } from "@/components/sections/experience";
import { HeroSection } from "@/components/sections/hero";
import { SkillsSection } from "@/components/sections/skills";
import { WorkSection } from "@/components/sections/work";

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="page-sheet relative z-10 bg-background">
        <div aria-hidden="true" className="page-sheet-grid pointer-events-none absolute inset-0" />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <WorkSection />
        <ContactSection />
      </div>
    </>
  );
}
