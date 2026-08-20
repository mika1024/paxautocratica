import Script from "next/script";

// Google Analytics（手册关卡5.2）
// 在 .env.local / Vercel 环境变量里配置 NEXT_PUBLIC_GA_ID="G-XXXXXXX" 后自动启用；
// 未配置时不加载任何脚本，不影响站点。
export default function Analytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  if (!gaId) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}');`}
      </Script>
    </>
  );
}
