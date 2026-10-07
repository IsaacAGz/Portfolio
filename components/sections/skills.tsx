import { SectionFrame } from "@/components/section-frame";
import { profile } from "@/content/profile";

export function SkillsSection() {
  return (
    <SectionFrame id="skills" title="Skills">
      <ul className="divide-y divide-white/10 border-y border-white/10">
        {profile.skillGroups.map((group) => (
          <li
            key={group.name}
            className="grid gap-4 py-8 md:grid-cols-[12rem_1fr] md:items-baseline md:gap-10"
          >
            <h3 className="text-sm text-muted">{group.name}</h3>
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {group.items.map((item) => (
                <li key={item} className="text-base text-foreground md:text-lg">
                  {item}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </SectionFrame>
  );
}
