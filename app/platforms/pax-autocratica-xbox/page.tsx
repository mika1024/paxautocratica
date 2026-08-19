import type { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import { xboxData } from "@/lib/guides/xbox";

export const metadata: Metadata = {
  title: xboxData.metaTitle,
  description: xboxData.description,
  alternates: { canonical: "/platforms/pax-autocratica-xbox/" },
  openGraph: {
    title: xboxData.metaTitle,
    description: xboxData.description,
  },
};

export default function XboxPage() {
  return <GuideLayout data={xboxData} crumb="Platforms" />;
}
