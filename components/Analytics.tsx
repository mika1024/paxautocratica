// Google Analytics 4（GA ID: G-BRBERZ9BKB）
// + Google AdSense（pub ID: ca-pub-7777138420044579）
// 注意：不用 next/script —— 其 beforeInteractive 策略在 Next 16 App Router 下
// 只输出 preload link + flight 数据（self.__next_s.push），原始 HTML 中没有真实
// <script> 标签，导致 AdSense 爬虫（不执行 JS）无法验证网站所有权。
// React 19 会把带 async src 的原生 <script> 服务端提升到 <head>，HTML 里直接可见。
export default function Analytics() {
  return (
    <>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-BRBERZ9BKB"
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-BRBERZ9BKB');`,
        }}
      />
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7777138420044579"
        crossOrigin="anonymous"
      />
    </>
  );
}
