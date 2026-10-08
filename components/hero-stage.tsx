import { ContactLinks } from "@/components/contact-links";
import Image from "next/image";

const nameRepeats = [0, 1, 2];

const nameStyle =
  "flex items-center text-[clamp(4.25rem,12.5vw,10rem)] leading-none font-medium tracking-[-0.05em] whitespace-nowrap text-foreground";

function NameLine({ name, heading }: { name: string; heading?: boolean }) {
  const Tag = heading ? "h1" : "div";

  return (
    <Tag
      id={heading ? "hero-title" : undefined}
      aria-hidden={heading ? undefined : true}
      className={heading ? `hero-name ${nameStyle}` : `hero-name-copy ${nameStyle}`}
    >
      {nameRepeats.map((index) => (
        <span key={index} className={index === 0 ? undefined : "hero-name-extra"}>
          {index > 0 ? (
            <span aria-hidden="true" className="hero-name-mark px-[0.35em]">
              -
            </span>
          ) : null}
          <span aria-hidden={index === 0 ? undefined : true}>{name}</span>
        </span>
      ))}
      <span aria-hidden="true" className="hero-name-mark px-[0.35em]">
        -
      </span>
    </Tag>
  );
}

export function HeroStage({
  role,
  name,
  pitch,
  email,
  linkedin,
  github,
}: {
  role: string;
  name: string;
  pitch: string;
  email: string;
  linkedin: string;
  github: string;
}) {
  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="hero-stage sticky top-0 z-0 -mt-[4.5rem] h-dvh scroll-mt-[-6rem] overflow-hidden"
    >
      <div className="relative h-full">
        <div aria-hidden="true" className="hero-grid pointer-events-none absolute inset-0" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 flex justify-center">
          <div
            aria-hidden="true"
            className="hero-portrait relative h-[min(88dvh,940px)] w-[min(92vw,760px)] mix-blend-darken"
          >
            <Image
              src="/images/portrait.png"
              alt=""
              fill
              priority
              sizes="(min-width: 768px) 760px, 92vw"
              className="object-contain object-bottom"
            />
          </div>
        </div>
        <div className="hero-name-frame pointer-events-none absolute top-[42%] left-0 z-10 w-full overflow-hidden">
          <div className="hero-name-track flex w-max">
            <NameLine name={name} heading />
            <NameLine name={name} />
          </div>
        </div>
        <div className="relative z-10 flex h-full flex-col">
          <div className="mx-auto w-full max-w-6xl px-4 pt-28 md:px-6">
            <p className="text-sm tracking-wide text-muted md:text-base">{role}</p>
          </div>
          <div className="mt-auto">
            <div className="h-8 bg-gradient-to-t from-[var(--hero)] to-transparent" />
            <div className="bg-[var(--hero)]">
              <div className="mx-auto flex w-full max-w-6xl flex-col items-start gap-6 px-4 pb-8 md:px-6 md:pb-10">
                <p className="max-w-[34ch] text-base leading-relaxed text-muted md:text-lg">{pitch}</p>
                <ContactLinks email={email} linkedin={linkedin} github={github} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
