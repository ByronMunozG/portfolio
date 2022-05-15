import NextLink from "next/link";
import Image, { StaticImageData } from "next/image";
import { Box, Text, LinkBox, LinkOverlay } from "@chakra-ui/react";
import { Global } from "@emotion/react";
import { FC, ReactNode } from "react";

interface IBaseGridItem {
  children?: ReactNode;
  title: string;
  thumbnail?: StaticImageData;
}
interface IGridItem extends IBaseGridItem {
  href: string;
}

export const GridItem: FC<IGridItem> = ({
  children,
  href,
  title,
  thumbnail,
}) => (
  <Box w="100%" textAlign="center">
    <LinkBox cursor="pointer">
      {thumbnail && (
        <Image
          src={thumbnail}
          alt={title}
          className="grid-item-thumbnail"
          placeholder="blur"
          loading="lazy"
        />
      )}
      <LinkOverlay href={href} target="_blank">
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
);

interface IWorkGridItem extends IBaseGridItem {
  id: string;
}

export const WorkGridItem: FC<IWorkGridItem> = ({
  children,
  id,
  title,
  thumbnail,
}) => (
  <Box w="100%" textAlign="center">
    <NextLink href={`/works/${id}`} passHref scroll={false}>
      <LinkBox cursor="pointer">
        {thumbnail && (
          <Image
            src={thumbnail}
            alt={title}
            className="grid-item-thumbnail"
            placeholder="blur"
          />
        )}
        <LinkOverlay href={`/works/${id}`}>
          <Text mt={2} fontSize={20}>
            {title}
          </Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </NextLink>
  </Box>
);

export const GridItemStyle = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
        border-radius: 12px;
      }
    `}
  />
);
