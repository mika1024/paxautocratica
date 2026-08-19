import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy — Pax Autocratica Wiki",
  description:
    "Privacy policy for Pax Autocratica Wiki — what data we collect, how we use it, and the cookies and third-party services we use.",
  alternates: { canonical: "/privacy/" },
};

export default function PrivacyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      updated="2026-08-19"
      intro="This privacy policy explains what information Pax Autocratica Wiki collects, how we use it, and the choices you have. We keep data collection to the minimum needed to run the site."
      blocks={[
        {
          heading: "Information We Collect",
          body: [
            "We do not require registration and we do not collect personal information such as names, email addresses, or payment details through this site.",
            "Like most websites, our hosting and analytics providers may automatically log standard technical data such as your IP address, browser type, pages visited, and timestamps. This data is used in aggregate to understand site performance and traffic.",
          ],
        },
        {
          heading: "Cookies and Third-Party Services",
          body: [
            "This site may use analytics services (such as Google Analytics) that place cookies to measure how visitors use the site. These tools help us understand which pages are useful and improve the experience.",
            "If advertising is displayed on this site, ad networks such as Google AdSense may use cookies to serve ads and measure ad performance, including to show ads based on your prior visits and interests. You can manage or disable cookies in your browser settings.",
          ],
        },
        {
          heading: "How We Use Information",
          body: [
            "We use aggregate traffic data to: improve page content and navigation, understand which guides are most useful, and measure the performance of the site and any advertising.",
            "We do not sell personal information and do not share it with third parties except as needed to operate the site (such as hosting and analytics providers) or where required by law.",
          ],
        },
        {
          heading: "Your Choices",
          body: [
            "You can block or delete cookies through your browser settings. Google provides tools to opt out of personalized advertising at https://adssettings.google.com.",
          ],
        },
        {
          heading: "Children's Privacy",
          body: [
            "This site is not directed at children under 13, and we do not knowingly collect personal information from children.",
          ],
        },
        {
          heading: "Changes to This Policy",
          body: [
            "We may update this policy from time to time. Changes will be posted on this page with an updated 'last updated' date.",
          ],
        },
        {
          heading: "Contact",
          body: [
            "Questions about this policy? Contact us at contact@paxautocratica.help.",
          ],
        },
      ]}
    />
  );
}
