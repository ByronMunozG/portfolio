import {
  ChakraProvider,
  cookieStorageManager,
  localStorageManager,
} from "@chakra-ui/react";
import theme from "lib/theme";
import { GetServerSideProps } from "next";
import { FC, ReactNode } from "react";

interface IChakraProps {
  cookies: string;
  children: ReactNode;
}

const Chakra: FC<IChakraProps> = ({ cookies, children }) => {
  const colorModeManager =
    typeof cookies === "string" ? cookieStorageManager : localStorageManager;

  return (
    <ChakraProvider theme={theme} colorModeManager={colorModeManager}>
      {children}
    </ChakraProvider>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  return {
    props: {
      cookies: req.headers.cookie ?? "",
    },
  };
};

export default Chakra;
