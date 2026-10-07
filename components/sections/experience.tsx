import { SectionFrame } from "@/components/section-frame";
import { profile } from "@/content/profile";

export function ExperienceSection() {
  return (
    <SectionFrame id="experience" title="Experience">
      <ol className="flex flex-col gap-16">
        {profile.experience.map((job) => (
          <li
            key={`${job.org}-${job.dates}`}
            className="grid gap-4 md:grid-cols-[11rem_1fr] md:gap-10"
          >
            <p className="font-mono text-sm text-muted">{job.dates}</p>
            <div>
              <h3 className="text-xl font-medium tracking-tight text-foreground md:text-2xl">
                {job.role}
              </h3>
              <p className="mt-1 text-base text-muted">{job.org}</p>
              <ul className="mt-6 flex max-w-[62ch] flex-col gap-3">
                {job.outcomes.map((outcome) => (
                  <li key={outcome} className="text-base leading-relaxed text-muted">
                    {outcome}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </SectionFrame>
  );
}
