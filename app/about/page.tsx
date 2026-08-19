import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "About — Pax Autocratica Wiki",
  description:
    "About Pax Autocratica Wiki — an independent fan-made guide hub for Pax Autocratica. Not affiliated with Multiverse.",
  alternates: { canonical: "/about/" },
};

export default function AboutPage() {
  return (
    <LegalLayout
      title="About Pax Autocratica Wiki"
      updated="2026-08-19"
      intro="Pax Autocratica Wiki is an independent fan-made guide site covering the colony sim and FPS roguelite Pax Autocratica, developed by Multiverse."
      blocks={[
        {
          heading: "What This Site Does",
          body: [
            "We organize official information and useful community findings into focused guides: gameplay systems, colony management, multiplayer status, roadmap updates, platform details, mods, and common player questions.",
            "Every guide is verified against official sources where possible — the Steam store page, official announcements, and the community wiki — so readers can trust what they find here.",
          ],
        },
        {
          heading: "What This Site Is Not",
          body: [
            "This is not an official Multiverse site and is not affiliated with or endorsed by Multiverse, Inc. We don't host downloads, don't provide cracks or trainers, and don't claim any ownership over game assets or trademarks.",
          ],
        },
        {
          heading: "Why We Built It",
          body: [
            "Pax Autocratica blends colony management with first-person combat in an unusual way, and players have a lot of questions during Early Access. This site exists to answer them clearly and honestly — including the questions where the honest answer is 'not confirmed yet.'",
          ],
        },
        {
          heading: "Contact",
          body: [
            "Questions, corrections, or feedback? See our contact page for how to reach us.",
          ],
        },
      ]}
    />
  );
}
