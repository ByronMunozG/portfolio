import Head from "next/head";
import { motion } from "framer-motion";
import { GridItemStyle } from "components/GridItem";
import { FC, ReactNode } from "react";

interface IArticleLayoutProps {
  children: ReactNode;
  title?: string;
}

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 20 },
};

const ArticleLayout: FC<IArticleLayoutProps> = ({ children, title }) => {
  const t = `${title} - Byron Muñoz`;
  return (
    <motion.article
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.4, type: "easeInOut" }}
      style={{ position: "relative", paddingTop: "3rem" }}
    >
      <>
        {title && (
          <Head>
            <title>{t}</title>
            <meta property="og:title" content={t} />
          </Head>
        )}
        {children}

        <GridItemStyle />
      </>
    </motion.article>
  );
};

export default ArticleLayout;
