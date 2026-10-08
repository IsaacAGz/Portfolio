"use client";

import { List, X } from "@phosphor-icons/react";
import { useEffect, useId, useState } from "react";
import { profile } from "@/content/profile";
import { sections, type SectionId } from "@/lib/sections";

const navSections = sections.filter((section) => section.id !== "hero");

function linkClass(active: boolean) {
  return active
    ? "bg-white/10 text-foreground"
    : "text-muted hover:bg-white/5 hover:text-foreground";
}

export function SiteHeader() {
  const [activeId, setActiveId] = useState<SectionId>("hero");
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    const nodes = sections
      .map((section) => document.getElementById(section.id))
      .filter((node): node is HTMLElement => node !== null);

    const ratios = new Map<string, number>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          ratios.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0);
        }

        let nextId: SectionId = "hero";
        let best = -1;
        for (const section of sections) {
          const ratio = ratios.get(section.id) ?? 0;
          if (ratio > best) {
            best = ratio;
            nextId = section.id;
          }
        }

        setActiveId((current) => (current === nextId ? current : nextId));
      },
      { threshold: [0.15, 0.35, 0.6, 0.85] },
    );

    for (const node of nodes) {
      observer.observe(node);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) {
      return;
    }

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const goTo = (id: SectionId) => {
    setActiveId(id);
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-20 px-4 pt-4 md:px-6">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-30 focus:rounded-full focus:bg-background focus:px-4 focus:py-2 focus:text-sm focus:text-foreground"
      >
        Skip to content
      </a>
      <nav aria-label="Sections" className="relative mx-auto max-w-6xl">
        <div className="site-nav flex h-14 items-center justify-between gap-4 rounded-full border border-white/10 px-2 shadow-[inset_0_1px_0_rgb(255_255_255/0.14)]">
          <a
            href="#hero"
            aria-current={activeId === "hero" ? "true" : undefined}
            onClick={() => goTo("hero")}
            className="shrink-0 rounded-full px-3 text-sm font-medium tracking-tight text-foreground"
          >
            {profile.name}
          </a>
          <ul className="hidden items-center gap-0.5 md:flex">
            {navSections.map((section) => {
              const active = activeId === section.id;
              return (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    aria-current={active ? "true" : undefined}
                    onClick={() => goTo(section.id)}
                    className={`inline-flex h-9 items-center rounded-full px-3 text-sm transition-colors duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${linkClass(active)}`}
                  >
                    {section.label}
                  </a>
                </li>
              );
            })}
          </ul>
          <button
            type="button"
            className="mr-1 inline-flex h-9 items-center gap-2 rounded-full px-3 text-sm text-foreground md:hidden"
            aria-expanded={open}
            aria-controls={menuId}
            onClick={() => setOpen((current) => !current)}
          >
            {open ? "Close" : "Sections"}
            {open ? (
              <X size={16} weight="light" aria-hidden="true" />
            ) : (
              <List size={16} weight="light" aria-hidden="true" />
            )}
          </button>
        </div>
        {open ? (
          <ul
            id={menuId}
            className="site-nav absolute inset-x-0 top-[calc(100%+0.5rem)] flex flex-col rounded-3xl border border-white/10 p-2 md:hidden"
          >
            {navSections.map((section) => {
              const active = activeId === section.id;
              return (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    aria-current={active ? "true" : undefined}
                    onClick={() => goTo(section.id)}
                    className={`flex h-11 items-center rounded-2xl px-4 text-sm ${linkClass(active)}`}
                  >
                    {section.label}
                  </a>
                </li>
              );
            })}
          </ul>
        ) : null}
      </nav>
    </header>
  );
}
