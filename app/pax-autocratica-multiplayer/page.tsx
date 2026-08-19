import type { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import { multiplayerData } from "@/lib/guides/multiplayer";

export const metadata: Metadata = {
  title: multiplayerData.metaTitle,
  description: multiplayerData.description,
  alternates: { canonical: "/pax-autocratica-multiplayer/" },
  openGraph: {
    title: multiplayerData.metaTitle,
    description: multiplayerData.description,
  },
};

export default function MultiplayerPage() {
  return <GuideLayout data={multiplayerData} crumb="Multiplayer" />;
}
