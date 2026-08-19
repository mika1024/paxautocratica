import type { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import { steamDeckData } from "@/lib/guides/steam-deck";

export const metadata: Metadata = {
  title: steamDeckData.metaTitle,
  description: steamDeckData.description,
  alternates: { canonical: "/platforms/pax-autocratica-steam-deck/" },
  openGraph: {
    title: steamDeckData.metaTitle,
    description: steamDeckData.description,
  },
};

export default function SteamDeckPage() {
  return <GuideLayout data={steamDeckData} crumb="Platforms" />;
}
