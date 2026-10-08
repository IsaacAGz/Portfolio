import { ContactLinks } from "@/components/contact-links";
import { HeroIntro } from "@/components/hero-intro";
import { profile } from "@/content/profile";

export function HeroSection() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="flex min-h-[calc(100dvh-4.5rem)] scroll-mt-24 flex-col justify-center px-4 pt-10 pb-16 md:px-6 md:pt-16"
    >
      <HeroIntro role={profile.role} name={profile.name} pitch={profile.pitch}>
        <ContactLinks
          email={profile.email}
          linkedin={profile.linkedin}
          github={profile.github}
        />
      </HeroIntro>
    </section>
  );
}
