import type { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import { flyInBaseData } from "@/lib/guides/fly-in-base";

export const metadata: Metadata = {
  title: flyInBaseData.metaTitle,
  description: flyInBaseData.description,
  alternates: { canonical: "/guides/pax-autocratica-fly-in-base/" },
  openGraph: {
    title: flyInBaseData.metaTitle,
    description: flyInBaseData.description,
  },
};

export default function FlyInBasePage() {
  return <GuideLayout data={flyInBaseData} crumb="Guides" />;
}
