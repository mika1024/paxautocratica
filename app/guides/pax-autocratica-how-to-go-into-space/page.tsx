import type { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import { goToSpaceData } from "@/lib/guides/how-to-go-in-to-space";

export const metadata: Metadata = {
  title: goToSpaceData.metaTitle,
  description: goToSpaceData.description,
  alternates: { canonical: "/guides/pax-autocratica-how-to-go-into-space/" },
  openGraph: {
    title: goToSpaceData.metaTitle,
    description: goToSpaceData.description,
  },
};

export default function GoToSpacePage() {
  return <GuideLayout data={goToSpaceData} crumb="Guides" />;
}
