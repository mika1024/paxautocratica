import Link from "next/link";
import { VideoEmbed, RelatedVideos } from "@/components/VideoEmbed";

type Section = {
  heading: string;
  body?: string[];
  list?: string[];
};

type Faq = {
  q: string;
  a: string;
};

export type GuideData = {
  title: string;
  metaTitle: string;
  description: string;
  updated: string;
  intro: string[];
  video?: { id: string; label: string };
  sections: Section[];
  faq: Faq[];
  related: { label: string; href: string }[];
};

export function GuideLayout({ data, crumb }: { data: GuideData; crumb: string }) {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      {/* 面包屑 */}
      <nav className="mb-4 text-sm text-muted">
        <Link href="/" className="hover:text-gold">Home</Link>
        <span className="mx-2">/</span>
        <span>{crumb}</span>
      </nav>

      <h1 className="text-3xl font-extrabold leading-tight md:text-4xl">{data.title}</h1>
      <p className="mt-3 text-sm text-muted">Updated: {data.updated}</p>
      <p className="mt-6 text-lg leading-relaxed text-foreground/90">{data.intro.join(" ")}</p>

      {/* 专属视频 */}
      {data.video && (
        <div className="mt-8">
          <VideoEmbed id={data.video.id} label={data.video.label} autoplay={false} />
        </div>
      )}

      {data.sections.map((s) => (
        <section key={s.heading} className="mt-10">
          <h2 className="border-b border-card-border pb-2 text-2xl font-bold">
            {s.heading}
          </h2>
          {s.body?.map((p) => (
            <p key={p.slice(0, 40)} className="mt-4 leading-relaxed text-muted">
              {p}
            </p>
          ))}
          {s.list && (
            <ul className="mt-4 space-y-3">
              {s.list.map((li) => (
                <li key={li} className="flex gap-3 text-muted">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  <span className="leading-relaxed">{li}</span>
                </li>
              ))}
            </ul>
          )}
        </section>
      ))}

      {/* FAQ */}
      {data.faq.length > 0 && (
        <section className="mt-12 rounded-lg border border-card-border bg-card p-6">
          <h2 className="text-xl font-bold">Frequently Asked Questions</h2>
          <div className="mt-4 space-y-5">
            {data.faq.map((f) => (
              <div key={f.q}>
                <h3 className="font-semibold text-gold">{f.q}</h3>
                <p className="mt-1 leading-relaxed text-muted">{f.a}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 无专属视频时展示通用 Trailer 视频 */}
      {!data.video && <RelatedVideos />}

      {/* 相关阅读 */}
      {data.related.length > 0 && (
        <section className="mt-10">
          <h2 className="text-lg font-bold">Keep Reading</h2>
          <div className="mt-3 grid gap-2 sm:grid-cols-2">
            {data.related.map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className="rounded border border-card-border bg-card px-4 py-3 text-sm transition hover:border-gold/50 hover:text-gold"
              >
                {r.label}
              </Link>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
