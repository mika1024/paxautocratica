import type { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import { roadmapData } from "@/lib/guides/roadmap";

export const metadata: Metadata = {
  title: roadmapData.metaTitle,
  description: roadmapData.description,
  alternates: { canonical: "/pax-autocratica-roadmap/" },
  openGraph: {
    title: roadmapData.metaTitle,
    description: roadmapData.description,
  },
};

export default function RoadmapPage() {
  return <GuideLayout data={roadmapData} crumb="Roadmap" />;
}
