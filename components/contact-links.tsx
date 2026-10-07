import { ArrowUpRight } from "@phosphor-icons/react/ssr";

const iconNest =
  "flex size-8 items-center justify-center rounded-full motion-safe:transition-transform motion-safe:duration-500 motion-safe:ease-[cubic-bezier(0.32,0.72,0,1)] motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-px motion-safe:group-hover:scale-105";

const press =
  "motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-[cubic-bezier(0.32,0.72,0,1)] motion-safe:active:scale-[0.98]";

function OutlineLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center gap-3 rounded-full border border-white/15 py-1.5 pr-1.5 pl-5 text-sm font-medium text-foreground ${press}`}
    >
      {label}
      <span className={`${iconNest} bg-white/10 text-foreground`}>
        <ArrowUpRight size={16} weight="light" aria-hidden="true" />
      </span>
    </a>
  );
}

export function ContactLinks({
  email,
  linkedin,
  github,
}: {
  email: string;
  linkedin: string;
  github: string;
}) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <a
        href={`mailto:${email}`}
        className={`group inline-flex items-center gap-3 rounded-full bg-foreground py-1.5 pr-1.5 pl-5 text-sm font-medium text-background ${press}`}
      >
        Email
        <span className={`${iconNest} bg-background text-foreground`}>
          <ArrowUpRight size={16} weight="light" aria-hidden="true" />
        </span>
      </a>
      <OutlineLink href={linkedin} label="LinkedIn" />
      <OutlineLink href={github} label="GitHub" />
    </div>
  );
}
