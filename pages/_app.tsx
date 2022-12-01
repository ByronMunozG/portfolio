import Chakra from "components/Chakra";
import Fonts from "components/Fonts";
import GoogleAnalytics from "components/GoogleAnalytics";
import MainLayout from "components/layouts/Main";
import { AnimatePresence } from "framer-motion";
import { AppProps } from "next/app";
import { FC } from "react";

if (typeof window !== "undefined") {
  window.history.scrollRestoration = "manual";
}

const Website: FC<AppProps> = ({ Component, pageProps, router }) => {
  return (
    <Chakra cookies={pageProps.cookies}>
      <Fonts />
      <GoogleAnalytics />
      <MainLayout router={router}>
        <AnimatePresence
          exitBeforeEnter
          initial={true}
          onExitComplete={() => {
            if (typeof window !== "undefined") {
              window.scrollTo({ top: 0 });
            }
          }}
        >
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </MainLayout>
    </Chakra>
  );
};

export default Website;
