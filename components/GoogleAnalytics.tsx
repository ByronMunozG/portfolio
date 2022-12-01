import { FC } from "react";
import Script from "next/script";

const GoogleAnalytics: FC = () => {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-PJ1H1ETWM4"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
window.dataLayer = window.dataLayer = [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-PJ1H1ETWM4', {
page_path: window.location.pathname,
});
`,
        }}
      />
    </>
  );
};

export default GoogleAnalytics;
