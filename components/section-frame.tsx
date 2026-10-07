export function SectionFrame({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="scroll-mt-28 px-4 py-24 md:px-6 md:py-32"
    >
      <div className="mx-auto w-full max-w-6xl">
        <h2
          id={`${id}-title`}
          className="max-w-5xl text-3xl font-medium tracking-tight text-foreground md:text-5xl"
        >
          {title}
        </h2>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}
