type Block = {
  heading: string;
  body: string[];
};

export function LegalLayout({
  title,
  updated,
  intro,
  blocks,
}: {
  title: string;
  updated: string;
  intro: string;
  blocks: Block[];
}) {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-extrabold leading-tight md:text-4xl">{title}</h1>
      <p className="mt-3 text-sm text-muted">Last updated: {updated}</p>
      <p className="mt-6 text-lg leading-relaxed text-foreground/90">{intro}</p>
      {blocks.map((b) => (
        <section key={b.heading} className="mt-10">
          <h2 className="border-b border-card-border pb-2 text-2xl font-bold">
            {b.heading}
          </h2>
          {b.body.map((p) => (
            <p key={p.slice(0, 40)} className="mt-4 leading-relaxed text-muted">
              {p}
            </p>
          ))}
        </section>
      ))}
    </article>
  );
}
