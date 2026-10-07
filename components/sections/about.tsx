import { SectionFrame } from "@/components/section-frame";
import { profile } from "@/content/profile";

export function AboutSection() {
  return (
    <SectionFrame id="about" title="About">
      <div className="flex max-w-[65ch] flex-col gap-6">
        {profile.about.map((paragraph) => (
          <p key={paragraph} className="text-base leading-relaxed text-muted md:text-lg">
            {paragraph}
          </p>
        ))}
      </div>
    </SectionFrame>
  );
}
