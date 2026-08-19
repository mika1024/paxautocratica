import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Terms of Service — Pax Autocratica Wiki",
  description:
    "Terms of service for Pax Autocratica Wiki — acceptable use, content accuracy, trademarks, and disclaimers.",
  alternates: { canonical: "/terms/" },
};

export default function TermsPage() {
  return (
    <LegalLayout
      title="Terms of Service"
      updated="2026-08-19"
      intro="By using Pax Autocratica Wiki, you agree to these terms. They're simple: use the site for lawful, personal purposes, and understand what this fan project is and isn't."
      blocks={[
        {
          heading: "Acceptable Use",
          body: [
            "You may browse, read, and share the guides on this site for personal, non-commercial purposes. You may not scrape, republish, or commercially redistribute the site's content without permission.",
            "You may not use this site for any unlawful purpose, attempt to disrupt its operation, or upload malicious content.",
          ],
        },
        {
          heading: "Content Accuracy Disclaimer",
          body: [
            "This site is a fan project maintained by volunteers. Game information changes frequently during Early Access, and while we verify content against official sources where possible, we make no warranty that every guide is accurate, complete, or current.",
            "Information about unannounced features (such as co-op or console ports) reflects official statements or is clearly labeled as speculation. Always confirm time-sensitive details against official sources.",
          ],
        },
        {
          heading: "Trademarks and Copyright",
          body: [
            "Pax Autocratica is a trademark of Multiverse, Inc. This site is not affiliated with, endorsed by, or sponsored by Multiverse. All game names, images, and trademarks belong to their respective owners and are used here only for identification and commentary.",
          ],
        },
        {
          heading: "External Links",
          body: [
            "This site links to external websites, including the Steam store, Discord, and official channels. We are not responsible for the content or practices of any third-party sites.",
          ],
        },
        {
          heading: "Limitation of Liability",
          body: [
            "This site is provided 'as is' without warranties of any kind. To the maximum extent permitted by law, we are not liable for any damages arising from your use of the site or reliance on its content.",
          ],
        },
        {
          heading: "Changes to These Terms",
          body: [
            "We may update these terms from time to time. Continued use of the site after changes constitutes acceptance of the updated terms.",
          ],
        },
      ]}
    />
  );
}
