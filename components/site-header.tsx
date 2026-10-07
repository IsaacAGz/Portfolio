import { profile } from "@/content/profile";
import { sections } from "@/lib/sections";

const navSections = sections.filter((section) => section.id !== "hero");

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 px-4 pt-4 md:px-6">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-30 focus:rounded-full focus:bg-background focus:px-4 focus:py-2 focus:text-sm focus:text-foreground"
      >
        Skip to content
      </a>
      <nav aria-label="Sections" className="site-nav mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-4 gap-y-1 rounded-3xl border border-white/10 px-2 py-2 shadow-[inset_0_1px_0_rgb(255_255_255/0.14)] md:h-14 md:flex-nowrap md:rounded-full md:py-0">
        <a
          href="#hero"
          className="shrink-0 rounded-full px-3 text-sm font-medium tracking-tight text-foreground"
        >
          {profile.name}
        </a>
        <ul className="flex flex-wrap items-center gap-0.5 md:min-w-0 md:flex-nowrap">
          {navSections.map((section) => (
            <li key={section.id} className="shrink-0">
              <a
                href={`#${section.id}`}
                className="inline-flex h-9 items-center rounded-full px-3 text-sm text-muted transition-colors duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-white/5 hover:text-foreground"
              >
                {section.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
