import { ContactLinks } from "@/components/contact-links";
import { profile } from "@/content/profile";

export function HeroSection() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="flex min-h-[calc(100dvh-8.5rem)] scroll-mt-24 flex-col justify-center px-4 pt-10 pb-16 md:min-h-[calc(100dvh-4.5rem)] md:px-6 md:pt-16"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12">
        <div>
          <p className="text-base text-muted md:text-lg">{profile.role}</p>
          <h1
            id="hero-title"
            className="mt-3 max-w-5xl text-5xl font-medium tracking-tight text-foreground md:text-6xl lg:text-7xl"
          >
            {profile.name}
          </h1>
        </div>
        <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-end lg:justify-between">
          <p className="max-w-[42ch] text-lg leading-relaxed text-muted">
            {profile.pitch}
          </p>
          <ContactLinks
            email={profile.email}
            linkedin={profile.linkedin}
            github={profile.github}
          />
        </div>
      </div>
    </section>
  );
}
