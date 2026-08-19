import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Contact — Pax Autocratica Wiki",
  description:
    "Contact Pax Autocratica Wiki — report corrections, suggest guides, or ask questions about the site.",
  alternates: { canonical: "/contact/" },
};

export default function ContactPage() {
  return (
    <LegalLayout
      title="Contact"
      updated="2026-08-19"
      intro="Have a correction, a guide suggestion, or a question about this site? We'd love to hear from you."
      blocks={[
        {
          heading: "Send Us an Email",
          body: [
            "For corrections, feedback, and guide requests, email us at: contact@paxautocratica.help",
            "We aim to reply within a few days. For time-sensitive game news, please check the official Steam page and Discord instead.",
          ],
        },
        {
          heading: "What We're Happy to Hear About",
          body: [
            "We welcome: fact corrections with sources, requests for new guide topics, bug reports about the site, and feedback on content quality.",
          ],
        },
        {
          heading: "What We Can't Help With",
          body: [
            "We're a fan site — we can't provide technical support for the game, process refunds, or answer questions that should go to Multiverse. For game support, use the official Steam discussion forums or the official Discord server.",
          ],
        },
      ]}
    />
  );
}
