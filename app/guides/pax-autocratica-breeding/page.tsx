import type { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import { breedingData } from "@/lib/guides/breeding";

export const metadata: Metadata = {
  title: breedingData.metaTitle,
  description: breedingData.description,
  alternates: { canonical: "/guides/pax-autocratica-breeding/" },
  openGraph: {
    title: breedingData.metaTitle,
    description: breedingData.description,
  },
};

export default function BreedingPage() {
  return <GuideLayout data={breedingData} crumb="Breeding" />;
}
