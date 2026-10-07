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
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <WorkSection />
      <ContactSection />
    </>
  );
}
