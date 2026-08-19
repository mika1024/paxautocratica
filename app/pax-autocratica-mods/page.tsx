import type { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import { modsData } from "@/lib/guides/mods";

export const metadata: Metadata = {
  title: modsData.metaTitle,
  description: modsData.description,
  alternates: { canonical: "/pax-autocratica-mods/" },
  openGraph: {
    title: modsData.metaTitle,
    description: modsData.description,
  },
};

export default function ModsPage() {
  return <GuideLayout data={modsData} crumb="Mods" />;
}
