import type { GuideData } from "@/components/GuideLayout";

export const gameplayData: GuideData = {
  title: "How the Pax Autocratica Gameplay Loop Really Works",
  metaTitle: "Pax Autocratica Gameplay: Colony Sim × FPS Loop Explained",
  description:
    "Wondering what Pax Autocratica is actually like to play? Learn the full colony simulation × FPS roguelite loop, citizen management, expeditions, and more — explained simply.",
  updated: "2026-08-19",
  intro: [
    "Pax Autocratica is not one game — it is two games bolted together into a single loop. On one side you run a darkly satirical sci-fi colony, assigning citizens to work, keeping them fed, and managing their fear and loyalty. On the other side you personally grab a weapon and lead troops into first-person roguelite firefights.",
    "This guide walks through the full Pax Autocratica gameplay loop: what you do in the colony, how expeditions work, and how the two halves feed each other.",
  ],
  sections: [
    {
      heading: "How the Two-Half Pax Autocratica Loop Connects",
      body: [
        "The game alternates between base management and first-person combat, and the two halves of the Pax Autocratica loop feed each other deliberately.",
        "A well-run colony produces better weapons, armor, and troops. Better troops push deeper into enemy territory. Resources and prisoners flow back to the colony, which grows stronger and more oppressive.",
      ],
      list: [
        "Colony phase: assign citizens to mine, gather, haul, research, and manufacture weapons, armor, food, and supplies.",
        "Expedition phase: leave the base, gather resources in space, fight enemies, and capture prisoners.",
        "Return phase: prisoners become citizens or resources, new materials unlock new buildings, and the cycle restarts.",
      ],
    },
    {
      heading: "Pax Autocratica Colony Management: Citizens Are Your Machinery",
      body: [
        "Every citizen is a worker with their own state. The core stats the game constantly tracks are Fear, Happiness, Hunger, and Loyalty — and how you treat the population is entirely your choice.",
        "Rule through fear, propaganda, surveillance, and punishment on one path, or through comfort and prosperity on the other. Policies like curfews and public feasts steer public sentiment in between.",
      ],
      list: [
        "Assign citizens to mining, gathering, hauling, research, and manufacturing.",
        "Citizens have opinions, relationships, fears, and loyalty levels that evolve over time.",
        "Morale reflects a soldier's mental state; long-term living conditions set its baseline.",
        "When morale falls below 25, soldiers may go on strike. At zero, they enter a frenzy state.",
      ],
    },
    {
      heading: "Pax Autocratica Base Building & Research Systems",
      body: [
        "The command center is where building technologies are researched. From it you unlock blueprints and construct facilities: barracks, food halls, prisons, armor workshops, weapon research centers, and resource transfer stations.",
        "Pax Autocratica research takes real time and grows longer with complexity. Buildings can be upgraded, moved, and destroyed, and construction mode lets you hover above the base for a better view.",
      ],
    },
    {
      heading: "Pax Autocratica Expeditions: The FPS Roguelite Half",
      body: [
        "When you are ready, you depart into the Tyris System — a large space map full of resource points, merchants, enemy outposts, and the sector overlord you are ultimately trying to defeat.",
        "Pax Autocratica combat is first-person and chaotic. You wield SMGs, pistols, rifles, grenades, and missiles, supported by allied soldiers who fight beside you. Enemies escalate from small squads to heavily armored elites and vehicles.",
      ],
      list: [
        "Roguelite Cores: Weapon Cores reshape how your guns handle, Combination Cores create synergies, and Squad Cores buff your troops.",
        "Capture rounds let you capture weakened enemies instead of killing them.",
        "Enemy strength rises the deeper and longer you travel — return to base before it escalates too far.",
        "If you fall in battle, the interstellar medical team returns you to base, but you lose a small portion of collected resources.",
      ],
    },
    {
      heading: "Pax Autocratica Prisoners: The Population Pipeline",
      body: [
        "Captured enemies are dragged back to your base and imprisoned. Once inside, you decide their fate through fear, indoctrination, execution, or conversion — and converted prisoners become citizens of your regime.",
        "This capture-and-convert system is the closest thing the game has to 'producing' new citizens, and it is one of the most distinctive mechanics in the Pax Autocratica gameplay.",
      ],
    },
  ],
  faq: [
    {
      q: "Is Pax Autocratica multiplayer?",
      a: "No — it is currently single-player. Co-op is a feature the developer hopes to build during Early Access, but no date or player count has been announced.",
    },
    {
      q: "What kind of game is Pax Autocratica?",
      a: "It is a colony simulation and FPS roguelite hybrid — part base-building management sim, part first-person combat game with roguelite upgrade systems.",
    },
    {
      q: "How long does one Pax Autocratica expedition take?",
      a: "As long as you like. You can gather resources and return quickly, or push deep into enemy territory until the escalating difficulty forces you back.",
    },
    {
      q: "Can citizens die in Pax Autocratica?",
      a: "Yes — soldiers can fall in combat, and units can even die of old age. How you manage morale, food, and housing affects their survival and loyalty.",
    },
  ],
  related: [
    { label: "How to Go Into Space", href: "/guides/pax-autocratica-how-to-go-into-space/" },
    { label: "Breeding & Prisoner Conversion", href: "/guides/pax-autocratica-breeding/" },
    { label: "Multiplayer & Co-op Status", href: "/pax-autocratica-multiplayer/" },
    { label: "Roadmap & Early Access", href: "/pax-autocratica-roadmap/" },
  ],
};
