import Link from "next/link";
import { GUIDE_LINKS, OFFICIAL_LINKS, SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-card-border bg-card">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-semibold">{SITE.aboutTitle ?? "Pax Autocratica Wiki"}</p>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            {SITE.about ??
              "Pax Autocratica Wiki is an independent fan-made guide site covering gameplay systems, colony management, multiplayer information, roadmap updates, platforms, mods, and common player questions. It is not affiliated with Multiverse."}
          </p>
          <p className="mt-3 text-sm text-muted">
            {SITE.description}
          </p>
          <p className="mt-3 text-xs text-muted">
            Pax Autocratica is a trademark of Multiverse, Inc. This is an unofficial fan project.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold text-foreground">Guides</p>
          <ul className="mt-3 space-y-2 text-sm">
            {GUIDE_LINKS.slice(0, 6).map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-muted transition hover:text-gold">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-foreground">Official Channels</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a href={OFFICIAL_LINKS.steam} target="_blank" rel="noopener noreferrer" className="text-muted transition hover:text-gold">
                Steam (Early Access)
              </a>
            </li>
            <li>
              <a href={OFFICIAL_LINKS.discord} target="_blank" rel="noopener noreferrer" className="text-muted transition hover:text-gold">
                Discord
              </a>
            </li>
            <li>
              <a href={OFFICIAL_LINKS.reddit} target="_blank" rel="noopener noreferrer" className="text-muted transition hover:text-gold">
                Reddit
              </a>
            </li>
            <li>
              <a href={OFFICIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer" className="text-muted transition hover:text-gold">
                YouTube
              </a>
            </li>
            <li>
              <a href={OFFICIAL_LINKS.website} target="_blank" rel="noopener noreferrer" className="text-muted transition hover:text-gold">
                Official Website
              </a>
            </li>
          </ul>
          <div className="mt-4 space-y-2 text-sm">
            <Link href="/about/" className="block text-muted transition hover:text-gold">About</Link>
            <Link href="/contact/" className="block text-muted transition hover:text-gold">Contact</Link>
            <Link href="/privacy/" className="block text-muted transition hover:text-gold">Privacy Policy</Link>
            <Link href="/terms/" className="block text-muted transition hover:text-gold">Terms of Service</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-card-border py-4 text-center text-xs text-muted">
        © 2026 {SITE.name} — an unofficial fan project. Pax Autocratica is a trademark of Multiverse, Inc.
      </div>
    </footer>
  );
}
