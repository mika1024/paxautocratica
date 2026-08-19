import type { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import { gameplayData } from "@/lib/guides/gameplay";

export const metadata: Metadata = {
  title: gameplayData.metaTitle,
  description: gameplayData.description,
  alternates: { canonical: "/guides/pax-autocratica-gameplay/" },
  openGraph: {
    title: gameplayData.metaTitle,
    description: gameplayData.description,
  },
};

export default function GameplayPage() {
  return <GuideLayout data={gameplayData} crumb="Gameplay" />;
}
