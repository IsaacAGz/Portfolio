import { HeroStage } from "@/components/hero-stage";
import { profile } from "@/content/profile";

export function HeroSection() {
  return (
    <HeroStage
      role={profile.role}
      name={profile.name}
      pitch={profile.pitch}
      email={profile.email}
      linkedin={profile.linkedin}
      github={profile.github}
    />
  );
}
