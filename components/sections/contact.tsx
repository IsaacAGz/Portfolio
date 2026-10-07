import { ContactLinks } from "@/components/contact-links";
import { profile } from "@/content/profile";

export function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="scroll-mt-28 px-4 py-24 md:px-6 md:py-32"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start gap-8">
        <h2
          id="contact-title"
          className="max-w-3xl text-3xl font-medium tracking-tight text-foreground md:text-5xl"
        >
          Interested in working together?
        </h2>
        <ContactLinks
          email={profile.email}
          linkedin={profile.linkedin}
          github={profile.github}
        />
        <p className="max-w-[48ch] text-sm leading-relaxed text-muted">
          The on-page chat will answer questions about this work.
        </p>
      </div>
    </section>
  );
}
