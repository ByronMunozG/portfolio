import Head from "next/head";
import { Box, Container } from "@chakra-ui/react";
import { FC, ReactNode } from "react";
import { NextRouter } from "next/router";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
interface IMainLayoutProps {
  children: ReactNode;
  router: NextRouter;
}

const MainLayout: FC<IMainLayoutProps> = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Byron homepage" />
        <meta name="author" content="Byron Muñoz" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        {/* <link rel="apple-touch-icon" href="apple-touch-icon.png"/>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" /> */}
        <meta name="twitter:title" content="Byron Muñoz" />
        <meta property="og:site_name" content="Byron Muñoz" />
        <meta name="og:title" content="Byron Muñoz" />
        <meta property="og:type" content="website" />
        <title>Byron Mu&#241;oz - Homepage</title>
      </Head>

      <Navbar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        {children}

        <Footer />
      </Container>
    </Box>
  );
};

export default MainLayout;
