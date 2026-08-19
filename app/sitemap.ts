import type { MetadataRoute } from "next";
import { SITE, ROUTES } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: ROUTES.home, priority: 1.0, freq: "weekly" },
    { path: ROUTES.gameplay, priority: 0.9, freq: "weekly" },
    { path: ROUTES.breeding, priority: 0.8, freq: "weekly" },
    { path: ROUTES.goToSpace, priority: 0.8, freq: "weekly" },
    { path: ROUTES.flyInBase, priority: 0.8, freq: "weekly" },
    { path: ROUTES.multiplayer, priority: 0.9, freq: "weekly" },
    { path: ROUTES.roadmap, priority: 0.9, freq: "weekly" },
    { path: ROUTES.ps5, priority: 0.8, freq: "monthly" },
    { path: ROUTES.xbox, priority: 0.8, freq: "monthly" },
    { path: ROUTES.steamDeck, priority: 0.8, freq: "monthly" },
    { path: ROUTES.mods, priority: 0.8, freq: "monthly" },
    { path: ROUTES.faq, priority: 0.7, freq: "monthly" },
    { path: ROUTES.about, priority: 0.3, freq: "yearly" },
    { path: ROUTES.contact, priority: 0.3, freq: "yearly" },
    { path: ROUTES.privacy, priority: 0.2, freq: "yearly" },
    { path: ROUTES.terms, priority: 0.2, freq: "yearly" },
  ];

  return routes.map((r) => ({
    url: `${SITE.url}${r.path}`,
    lastModified: new Date(),
    changeFrequency: r.freq as MetadataRoute.Sitemap[number]["changeFrequency"],
    priority: r.priority,
  }));
}
