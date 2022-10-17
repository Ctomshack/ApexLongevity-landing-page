import Script from "next/script";
import SEO from "@bradgarropy/next-seo";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <SEO
        title="Apex Longevity"
        description="Compliant cash discounts for chiropractors and a discount medical program for chirorpactic patients nationwide"
        keywords={[
          "chiropractor",
          "chiropractic",
          "dmpo",
          "discount medical plan",
          "discount medical plan organization",
          "apex",
          "apex longevity",
          "CHUSA",
          "chirohealthusa",
          "chirohealth",
          "chiro health",
          "chiro health usa",
          "chiropractor cash discount",
          "uninsured",
        ]}
      />
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script id="google-analytics" strategy="lazyOnload">
        {`window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');`}
      </Script>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
