import type { Metadata } from "next";
import { GuideLayout } from "@/components/GuideLayout";
import { ps5Data } from "@/lib/guides/ps5";

export const metadata: Metadata = {
  title: ps5Data.metaTitle,
  description: ps5Data.description,
  alternates: { canonical: "/platforms/pax-autocratica-ps5/" },
  openGraph: {
    title: ps5Data.metaTitle,
    description: ps5Data.description,
  },
};

export default function Ps5Page() {
  return <GuideLayout data={ps5Data} crumb="Platforms" />;
}
