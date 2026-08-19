import type { GuideData } from "@/components/GuideLayout";

export const steamDeckData: GuideData = {
  title: "Pax Autocratica on Steam Deck: Performance, Settings and What to Expect",
  metaTitle: "Pax Autocratica Steam Deck — Setup & Performance Tips",
  description:
    "Can Pax Autocratica run on Steam Deck? Compatibility isn't officially verified yet, but here's what players can expect — framerate targets, graphics settings, and battery life.",
  updated: "2026-08-19",
  intro: [
    "Pax Autocratica's Steam Deck compatibility has not been officially confirmed. Valve has not published a Deck Verified rating, and Multiverse hasn't made any statement about handheld optimization.",
    "That said, plenty of unverified games run fine on Deck. Here's what players can expect from Pax Autocratica on Steam Deck, the performance considerations specific to this game, and settings tips for the best experience.",
  ],
  sections: [
    {
      heading: "Pax Autocratica Steam Deck Verification Status: Not Yet Confirmed",
      body: [
        "No Deck Verified or Playable rating exists for Pax Autocratica as of August 2026. This is not a 'no' — it simply means nobody official has tested and endorsed the experience.",
        "Given the game's dual nature — overhead colony management with fine cursor work plus fast-paced FPS combat — the Deck's trackpads and sticks could handle both halves in principle, but that's educated guesswork rather than confirmed fact.",
      ],
    },
    {
      heading: "Pax Autocratica Performance Profile on Handheld Hardware",
      body: [
        "The game is a hybrid: fast-paced roguelite shooting plus an in-depth colony simulation. The Pax Autocratica colony side is CPU-heavy — the game constantly calculates worker happiness, resource gathering, and combat physics simultaneously — which matters on the Deck's Zen 2 CPU.",
      ],
      list: [
        "Expect stable 40 FPS to be the practical target due to heavy CPU-based worker simulation.",
        "The Deck's 16GB of RAM handles the memory load well.",
        "CPU bottlenecks appear when the colony grows large while you're in a massive firefight.",
        "Limiting active workers or lowering simulation distance can mitigate frame drops.",
      ],
    },
    {
      heading: "Optimal Pax Autocratica Graphics Settings on Steam Deck",
      body: [
        "For handheld play, prioritizing CPU headroom over visual fidelity is the winning move:",
      ],
      list: [
        "Lower shadow and particle settings to prevent frame drops during chaotic firefights.",
        "Target 40 FPS with the Deck's refresh rate matching for a smoother feel.",
        "Keep the resolution at native Deck resolution rather than upscaling aggressively.",
        "Use the touchpad radial menu for efficient worker assignments on the go.",
      ],
    },
    {
      heading: "Pax Autocratica Steam Deck Battery Life Expectations",
      body: [
        "Players can expect roughly 2.5 to 3 hours of playtime at medium brightness with a limited TDP. Battery life will vary with colony size and combat intensity.",
      ],
    },
    {
      heading: "The Bottom Line on Pax Autocratica Steam Deck",
      body: [
        "If you only have a Deck and want to know whether Pax Autocratica is worth the gamble: the hybrid loop is a good fit for the hardware in principle, but unverified. Check official announcements and community reports before relying on it for your only platform.",
      ],
    },
  ],
  faq: [
    {
      q: "Is Pax Autocratica Steam Deck verified?",
      a: "No — Valve hasn't published a Deck Verified rating, and the developer hasn't commented on handheld optimization.",
    },
    {
      q: "Can Pax Autocratica run on Steam Deck?",
      a: "Probably — many unverified games run fine — but nothing official confirms the experience. Expect it to be playable rather than perfectly optimized.",
    },
    {
      q: "What's the target framerate for Pax Autocratica on Deck?",
      a: "A stable 40 FPS is the practical target, given the CPU-heavy colony simulation and fast FPS combat.",
    },
    {
      q: "How long does the battery last playing Pax Autocratica on Deck?",
      a: "Roughly 2.5 to 3 hours at medium brightness with limited TDP.",
    },
  ],
  related: [
    { label: "PS5 Release Status", href: "/platforms/pax-autocratica-ps5/" },
    { label: "Xbox & Game Pass Status", href: "/platforms/pax-autocratica-xbox/" },
    { label: "Gameplay Guide", href: "/guides/pax-autocratica-gameplay/" },
    { label: "Multiplayer & Co-op Status", href: "/pax-autocratica-multiplayer/" },
  ],
};
