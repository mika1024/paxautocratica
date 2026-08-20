import Script from "next/script";

// Google Analytics 4（GA ID: G-NJQDM7HBKY）
// 挂在根布局（app/layout.tsx）中，由 Next.js 负责注入，全站每个页面仅加载一次，不会重复安装。
// strategy="beforeInteractive" 会在 <head> 中先于页面交互脚本加载，确保不漏统计。
export default function Analytics() {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-NJQDM7HBKY"
        strategy="beforeInteractive"
      />
      <Script id="google-analytics" strategy="beforeInteractive">
        {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-NJQDM7HBKY');`}
      </Script>
    </>
  );
}
