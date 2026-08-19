import type { Metadata } from "next";
import Link from "next/link";
import { HOME } from "@/lib/home";
import { VIDEOS, GUIDE_LINKS, ROUTES } from "@/lib/site";
import { VideoEmbed } from "@/components/VideoEmbed";

export const metadata: Metadata = {
  title: "Pax Autocratica Wiki — Guide, Roadmap & Multiplayer",
  description: HOME.meta.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  const h = HOME;
  return (
    <>
      {/* Hero */}
      <section className="border-b border-card-border bg-gradient-to-b from-card to-background">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-gold">
            {h.hero.eyebrow}
          </p>
          <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">
            {h.hero.title}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted">
            {h.hero.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={h.hero.primaryCta.href}
              className="rounded bg-red px-5 py-2.5 font-medium text-white transition hover:bg-red-light"
            >
              {h.hero.primaryCta.label}
            </a>
            <a
              href={h.hero.secondaryCta.href}
              className="rounded border border-gold/50 px-5 py-2.5 font-medium text-gold transition hover:bg-gold/10"
            >
              {h.hero.secondaryCta.label}
            </a>
            <a
              href={h.hero.tertiaryCta.href}
              className="rounded border border-card-border px-5 py-2.5 font-medium text-muted transition hover:text-foreground"
            >
              {h.hero.tertiaryCta.label}
            </a>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
            {h.hero.stats.map((s) => (
              <span key={s} className="flex items-center gap-2 text-sm text-muted">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 大屏官方视频（吸睛留住用户） */}
      <section className="border-b border-card-border bg-card">
        <div className="mx-auto max-w-4xl px-4 py-12">
          <h2 className="text-center text-2xl font-bold md:text-3xl">
            Watch the Official Trailer
          </h2>
          <p className="mt-2 text-center text-muted">
            See Pax Autocratica's colony management and FPS combat loops in action.
          </p>
          <VideoEmbed id={VIDEOS.trailer.id} label={VIDEOS.trailer.title} autoplay />
        </div>
      </section>

      {/* Start Here */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <p className="text-sm font-medium uppercase tracking-widest text-gold">
          {h.start.eyebrow}
        </p>
        <h2 className="mt-2 text-2xl font-bold md:text-3xl">{h.start.title}</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {h.start.cards.map((c, i) => (
            <Link
              key={c.title}
              href={c.href}
              className="group rounded-lg border border-card-border bg-card p-6 transition hover:border-gold/50"
            >
              <span className="font-mono text-sm text-gold">0{i + 1}</span>
              <h3 className="mt-2 text-lg font-semibold group-hover:text-gold">
                {c.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{c.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* About Game */}
      <section className="border-y border-card-border bg-card">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">{h.aboutGame.title}</h2>
            {h.aboutGame.paragraphs.map((p) => (
              <p key={p.slice(0, 40)} className="mt-4 leading-relaxed text-muted">
                {p}
              </p>
            ))}
            <Link
              href={h.aboutGame.cta.href}
              className="mt-6 inline-block rounded bg-red px-5 py-2.5 font-medium text-white transition hover:bg-red-light"
            >
              {h.aboutGame.cta.label}
            </Link>
          </div>
          <dl className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {h.aboutGame.stats.map((s) => (
              <div key={s.label} className="rounded-lg border border-card-border bg-background p-4">
                <dt className="text-xs uppercase tracking-wider text-muted">{s.label}</dt>
                <dd className="mt-1 font-semibold">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* 页面索引（1跳到达所有页面） */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <p className="text-sm font-medium uppercase tracking-widest text-gold">
          Explore
        </p>
        <h2 className="mt-2 text-2xl font-bold md:text-3xl">Everything on This Wiki</h2>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {GUIDE_LINKS.map((g) => (
            <Link
              key={g.href}
              href={g.href}
              className="group rounded-lg border border-card-border bg-card px-5 py-4 transition hover:border-gold/50"
            >
              <span className="text-sm font-medium group-hover:text-gold">
                {g.label}
              </span>
              <span className="mt-1 block text-xs text-muted">{g.href}</span>
            </Link>
          ))}
        </div>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          <Link href={ROUTES.about} className="rounded-lg border border-card-border bg-card px-5 py-4 text-sm text-muted transition hover:border-gold/50 hover:text-gold">
            About this Wiki
          </Link>
          <Link href={ROUTES.contact} className="rounded-lg border border-card-border bg-card px-5 py-4 text-sm text-muted transition hover:border-gold/50 hover:text-gold">
            Contact
          </Link>
          <Link href={ROUTES.privacy} className="rounded-lg border border-card-border bg-card px-5 py-4 text-sm text-muted transition hover:border-gold/50 hover:text-gold">
            Privacy Policy
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-card-border bg-card py-16 text-center">
        <h2 className="text-2xl font-bold md:text-3xl">{h.finalCta.title}</h2>
        <p className="mx-auto mt-4 max-w-3xl leading-relaxed text-muted">
          {h.finalCta.description}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href={h.finalCta.primary.href}
            className="rounded bg-red px-6 py-3 font-medium text-white transition hover:bg-red-light"
          >
            {h.finalCta.primary.label}
          </a>
          <a
            href={h.finalCta.secondary.href}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded border border-gold/50 px-6 py-3 font-medium text-gold transition hover:bg-gold/10"
          >
            {h.finalCta.secondary.label}
          </a>
        </div>
      </section>
    </>
  );
}
