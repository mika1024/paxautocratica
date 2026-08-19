// 全站统一配置：导航、社群链接、品牌信息
export const SITE = {
  name: "Pax Autocratica Wiki",
  tagline: "Fan-Made Guide Hub",
  description:
    "Pax Autocratica wiki with beginner guides, gameplay help, multiplayer info, roadmap updates, platform details, mods, and Early Access tips.",
  url: "https://paxautocratica.help",
  themeColor: "#B92536",
  background: "#111318",
  aboutTitle: "Pax Autocratica Wiki",
  about:
    "Pax Autocratica Wiki is an independent fan-made guide site covering gameplay systems, colony management, multiplayer information, roadmap updates, platforms, mods, and common player questions. The site organizes official information and useful community findings into focused guides. It is not affiliated with Multiverse.",
};

// SEO 友好 URL 映射（原则2：关键词进 URL）
export const ROUTES = {
  home: "/",
  gameplay: "/guides/pax-autocratica-gameplay/",
  breeding: "/guides/pax-autocratica-breeding/",
  goToSpace: "/guides/pax-autocratica-how-to-go-into-space/",
  flyInBase: "/guides/pax-autocratica-fly-in-base/",
  multiplayer: "/pax-autocratica-multiplayer/",
  roadmap: "/pax-autocratica-roadmap/",
  mods: "/pax-autocratica-mods/",
  ps5: "/platforms/pax-autocratica-ps5/",
  xbox: "/platforms/pax-autocratica-xbox/",
  steamDeck: "/platforms/pax-autocratica-steam-deck/",
  faq: "/faq/",
  about: "/about/",
  contact: "/contact/",
  privacy: "/privacy/",
  terms: "/terms/",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: ROUTES.home },
  { label: "Gameplay", href: ROUTES.gameplay },
  { label: "Multiplayer", href: ROUTES.multiplayer },
  { label: "Roadmap", href: ROUTES.roadmap },
  { label: "Platforms", href: ROUTES.ps5 },
  { label: "Mods", href: ROUTES.mods },
  { label: "FAQ", href: ROUTES.faq },
];

export const GUIDES_DROPDOWN = [
  { label: "Gameplay Guide", href: ROUTES.gameplay },
  { label: "Breeding & Prisoner Conversion", href: ROUTES.breeding },
  { label: "How to Go Into Space", href: ROUTES.goToSpace },
  { label: "How to Fly in Base", href: ROUTES.flyInBase },
];

export const PLATFORMS_DROPDOWN = [
  { label: "PS5 Release", href: ROUTES.ps5 },
  { label: "Xbox & Game Pass", href: ROUTES.xbox },
  { label: "Steam Deck", href: ROUTES.steamDeck },
];

export const OFFICIAL_LINKS = {
  steam: "https://store.steampowered.com/app/1067360/Pax_Autocratica/",
  website: "https://www.paxautocratica.com/",
  discord: "https://discord.gg/U2WCanzz7e",
  reddit: "https://www.reddit.com/r/PaxAutocratica/",
  youtube: "https://www.youtube.com/@PaxAutocratica",
  trailer: "https://www.youtube.com/watch?v=C8b5V5Ehx_E",
};

export const VIDEOS = {
  trailer: { id: "C8b5V5Ehx_E", title: "Official Early Access Date Trailer" },
  goToSpace: { id: "LVNHhVi-qPU", title: "How to Go Into Space — Demo" },
  flyInBase: { id: "PcIk51D_cfo", title: "How to Fly in Base — Demo" },
};

export const GUIDE_LINKS = [
  { label: "Gameplay Guide", href: ROUTES.gameplay },
  { label: "Breeding & Prisoner Conversion", href: ROUTES.breeding },
  { label: "How to Go Into Space", href: ROUTES.goToSpace },
  { label: "How to Fly in Base", href: ROUTES.flyInBase },
  { label: "Multiplayer & Co-op Status", href: ROUTES.multiplayer },
  { label: "Roadmap & Early Access", href: ROUTES.roadmap },
  { label: "PS5 Release", href: ROUTES.ps5 },
  { label: "Xbox & Game Pass", href: ROUTES.xbox },
  { label: "Steam Deck", href: ROUTES.steamDeck },
  { label: "Mods, Cheats & Safety", href: ROUTES.mods },
  { label: "FAQ", href: ROUTES.faq },
];
