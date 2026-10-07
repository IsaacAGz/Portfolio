import { profile } from "@/content/profile";
import { sections } from "@/lib/sections";

const navSections = sections.filter((section) => section.id !== "hero");

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 px-4 py-12 md:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <p className="text-sm text-muted">{profile.name}</p>
        <ul className="flex flex-wrap gap-x-5 gap-y-2">
          {navSections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className="text-sm text-muted transition-colors duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:text-foreground"
              >
                {section.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
