import { ArrowUpRight } from "@phosphor-icons/react/ssr";
import Image from "next/image";
import { ProjectShell } from "@/components/project-shell";
import { SectionFrame } from "@/components/section-frame";
import { profile } from "@/content/profile";

function ProjectLinks({
  liveUrl,
  repoUrl,
}: {
  liveUrl?: string;
  repoUrl?: string;
}) {
  return (
    <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2">
      {liveUrl ? (
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm text-foreground motion-safe:transition-colors motion-safe:duration-500 motion-safe:ease-[cubic-bezier(0.32,0.72,0,1)] hover:text-accent"
        >
          Live site
          <ArrowUpRight size={14} weight="light" aria-hidden="true" />
        </a>
      ) : null}
      {repoUrl ? (
        <a
          href={repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-muted motion-safe:transition-colors motion-safe:duration-500 motion-safe:ease-[cubic-bezier(0.32,0.72,0,1)] hover:text-foreground"
        >
          Source
        </a>
      ) : null}
    </div>
  );
}

function ProjectFrame({ image, name }: { image?: string; name: string }) {
  return (
    <div
      className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/10"
      aria-hidden={image ? undefined : true}
    >
      {image ? (
        <Image
          src={image}
          alt={name}
          fill
          sizes="(min-width: 768px) 22rem, 100vw"
          className="object-cover"
        />
      ) : null}
    </div>
  );
}

function projectImage(project: object) {
  if (!("image" in project) || typeof project.image !== "string") {
    return undefined;
  }

  return project.image;
}

function ProjectBody({
  name,
  summary,
  stack,
  featured,
}: {
  name: string;
  summary: string;
  stack: readonly string[];
  featured?: boolean;
}) {
  return (
    <>
      <h3
        className={
          featured
            ? "text-3xl font-medium tracking-tight text-foreground md:text-4xl"
            : "text-2xl font-medium tracking-tight text-foreground"
        }
      >
        {name}
      </h3>
      <p className="mt-4 max-w-[58ch] text-base leading-relaxed text-muted">{summary}</p>
      <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-1">
        {stack.map((item) => (
          <li key={item} className="font-mono text-xs text-muted">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export function WorkSection() {
  const [featured, ...rest] = profile.projects;

  return (
    <SectionFrame id="work" title="Work">
      <div className="flex flex-col gap-4">
        {featured ? (
          <ProjectShell>
            <div className="grid items-center gap-8 rounded-[calc(2rem-0.375rem)] bg-background p-8 shadow-[inset_0_1px_0_rgb(255_255_255/0.12)] md:grid-cols-[minmax(0,1fr)_minmax(16rem,22rem)] md:p-12">
              <div>
                <ProjectBody
                  name={featured.name}
                  summary={featured.summary}
                  stack={featured.stack}
                  featured
                />
                <ProjectLinks
                  liveUrl={"liveUrl" in featured ? featured.liveUrl : undefined}
                  repoUrl={"repoUrl" in featured ? featured.repoUrl : undefined}
                />
              </div>
              <ProjectFrame image={projectImage(featured)} name={featured.name} />
            </div>
          </ProjectShell>
        ) : null}
        {rest.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {rest.map((project) => (
              <ProjectShell key={project.name}>
                <div className="flex h-full flex-col rounded-[calc(2rem-0.375rem)] bg-background p-7 shadow-[inset_0_1px_0_rgb(255_255_255/0.12)] md:p-8">
                  <ProjectFrame image={projectImage(project)} name={project.name} />
                  <div className="mt-6">
                    <ProjectBody
                      name={project.name}
                      summary={project.summary}
                      stack={project.stack}
                    />
                  </div>
                  <div className="mt-auto">
                    <ProjectLinks
                      liveUrl={"liveUrl" in project ? project.liveUrl : undefined}
                      repoUrl={"repoUrl" in project ? project.repoUrl : undefined}
                    />
                  </div>
                </div>
              </ProjectShell>
            ))}
          </div>
        ) : null}
      </div>
    </SectionFrame>
  );
}
