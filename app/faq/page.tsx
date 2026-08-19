import type { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import type { GuideData } from "@/components/GuideLayout";

export const metadata: Metadata = {
  title: "Pax Autocratica FAQ — All Common Questions Answered",
  description:
    "All the common Pax Autocratica questions answered in one place: multiplayer, PS5, Xbox, Steam Deck, breeding, mods, price, release date, and more.",
  alternates: { canonical: "/faq/" },
};

const faqData: GuideData = {
  title: "Pax Autocratica FAQ: All Common Questions Answered",
  metaTitle: "Pax Autocratica FAQ",
  description:
    "Quick answers to the most common Pax Autocratica questions — multiplayer, platforms, breeding, mods, price, and Early Access.",
  updated: "2026-08-19",
  intro: [
    "This FAQ collects the quick answers to the questions players ask most about Pax Autocratica. For deeper dives, follow the related guides at the bottom of the page.",
  ],
  sections: [
    {
      heading: "The Basics",
      body: [],
      list: [
        "Release date: August 10, 2026 (Early Access).",
        "Price: $29.99 USD on Steam and Epic Games Store, with an intro discount at launch.",
        "Developer / Publisher: Multiverse.",
        "Platforms: Windows PC only. No console versions announced.",
        "Genre: Colony sim + FPS roguelite hybrid.",
        "Early Access length: approximately two years, with a price increase planned at 1.0.",
      ],
    },
    {
      heading: "Multiplayer & Co-op",
      body: [],
      list: [
        "Is it multiplayer? No — currently single-player.",
        "Will co-op be added? The developer hopes to build co-op during Early Access, but no date, player count, or design has been announced.",
      ],
    },
    {
      heading: "Platforms",
      body: [],
      list: [
        "PS5? No version and none announced. PC version supports PlayStation controllers.",
        "Xbox? No version and none announced. Not on Game Pass. Xbox controllers work on PC.",
        "Steam Deck? Not verified. Likely playable, target ~40 FPS, expect 2.5–3 hours battery.",
      ],
    },
    {
      heading: "Gameplay Questions",
      body: [],
      list: [
        "Is there breeding? No confirmed breeding mechanic — population growth comes from prisoner conversion, conscription, and trade.",
        "Can I fly in base? Yes — unlock aerial inspection at the training center, then hold jump in base.",
        "How do I go into space? Complete the base setup, then depart on an expedition through the wormhole into the Tyris System.",
        "Can I play with a controller? Yes — full controller support, including Xbox and PlayStation controllers.",
      ],
    },
    {
      heading: "Mods & Safety",
      body: [],
      list: [
        "Are there mods? No official mod tools or Workshop support yet.",
        "Are there official cheats? No. Unofficial trainers risk corrupting saves and may contain malware.",
        "Is there a free way to try the game? Yes — Pax Autocratica: Prologue is a free standalone demo on Steam.",
      ],
    },
  ],
  faq: [
    {
      q: "Is Pax Autocratica worth buying in Early Access?",
      a: "Reviews are strongly positive (91% from 1,123+ reviews). It's a polished Early Access build with a full colony-to-combat loop. Buy for the current single-player experience — not for promised features like co-op.",
    },
    {
      q: "Where can I buy Pax Autocratica?",
      a: "On Steam and the Epic Games Store for Windows PC at $29.99 USD.",
    },
    {
      q: "Does Pax Autocratica have a free demo?",
      a: "Yes — Pax Autocratica: Prologue is permanently free on Steam and covers the first sector, a boss fight, and the starting base.",
    },
  ],
  related: [
    { label: "Gameplay Guide", href: "/guides/pax-autocratica-gameplay/" },
    { label: "Multiplayer & Co-op Status", href: "/pax-autocratica-multiplayer/" },
    { label: "Roadmap & Early Access", href: "/pax-autocratica-roadmap/" },
    { label: "Mods, Cheats & Safety", href: "/pax-autocratica-mods/" },
  ],
};

export default function FaqPage() {
  return <GuideLayout data={faqData} crumb="FAQ" />;
}
