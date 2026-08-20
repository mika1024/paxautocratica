import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Analytics from "@/components/Analytics";
import { SITE } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.name + " — Guide, Roadmap & Multiplayer",
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords:
    "Pax Autocratica, guide, gameplay, multiplayer, roadmap, mods, cheats, Steam, breeding, ps5, xbox, steam deck",
  // 不在根布局写死 canonical，让 Next.js 基于 metadataBase 为每个路由自动生成
  // 各自的 canonical（https://paxautocratica.help/实际路径），避免所有页 canonical 都指向首页。
  openGraph: {
    title: SITE.name + " — Guide, Roadmap & Multiplayer",
    description: SITE.description,
    type: "website",
    siteName: SITE.name,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
