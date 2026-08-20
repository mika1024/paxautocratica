import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  distDir: process.env.NEXT_DIST_DIR || ".next",
  // 手册关卡5.5：统一 www → 非 www（apex 为 canonical），301 跳转
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.paxautocratica.help" }],
        destination: "https://paxautocratica.help/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
