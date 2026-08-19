"use client";

import Link from "next/link";
import { useState } from "react";
import {
  NAV_LINKS,
  GUIDES_DROPDOWN,
  PLATFORMS_DROPDOWN,
  SITE,
} from "@/lib/site";

function Dropdown({
  label,
  items,
}: {
  label: string;
  items: { label: string; href: string }[];
}) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1 rounded px-3 py-1.5 text-sm text-muted transition hover:bg-card hover:text-foreground"
      >
        {label}
        <svg
          className={`h-3 w-3 transition ${open ? "rotate-180" : ""}`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {open && (
        <div className="absolute left-0 top-full z-50 mt-1 w-64 rounded-lg border border-card-border bg-card p-1 shadow-xl">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block rounded px-3 py-2 text-sm text-muted transition hover:bg-background hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-card-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="flex items-center gap-2">
          {/* 真实图标（用户提供的 android-chrome-192x192.png） */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/android-chrome-192x192.png"
            alt="Pax Autocratica logo"
            width={40}
            height={40}
            className="h-10 w-10 rounded"
          />
          <span className="text-sm font-semibold leading-tight">
            Pax Autocratica
            <span className="block text-[11px] font-normal text-muted">
              {SITE.tagline}
            </span>
          </span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((l) => {
            if (l.label === "Gameplay") {
              return (
                <Dropdown key={l.href} label="Guides" items={GUIDES_DROPDOWN} />
              );
            }
            if (l.label === "Platforms") {
              return (
                <Dropdown
                  key={l.href}
                  label="Platforms"
                  items={PLATFORMS_DROPDOWN}
                />
              );
            }
            return (
              <Link
                key={l.href}
                href={l.href}
                className="rounded px-3 py-1.5 text-sm text-muted transition hover:bg-card hover:text-foreground"
              >
                {l.label}
              </Link>
            );
          })}
        </nav>
        <a
          href="https://store.steampowered.com/app/1067360/Pax_Autocratica/"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded bg-red px-3 py-1.5 text-sm font-medium text-white transition hover:bg-red-light"
        >
          Play on Steam
        </a>
      </div>
    </header>
  );
}
