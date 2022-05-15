import NextLink from "next/link";
import { Heading, Box, Image, Link, Badge } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { FC, PropsWithChildren } from "react";

export const Title: FC<PropsWithChildren<{}>> = ({ children }) => (
  <Box>
    <NextLink href="/works" passHref>
      <Link>Works</Link>
    </NextLink>
    <span>
      {" "}
      <ChevronRightIcon />{" "}
    </span>
    <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
      {children}
    </Heading>
  </Box>
);

interface IWorkImageProps {
  src: string;
  alt: string;
}

export const WorkImage: FC<IWorkImageProps> = ({ src, alt }) => (
  <Image borderRadius="lg" w="full" src={src} alt={alt} mb={4} />
);

export const Meta: FC<PropsWithChildren<{}>> = ({ children }) => (
  <Badge colorScheme="green" mr={2}>
    {children}
  </Badge>
);
