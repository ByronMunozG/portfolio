import NextLink, { LinkProps } from "next/link";
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue,
  BoxProps,
  LinkProps as ChakraLinkProps,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { IoLogoGithub } from "react-icons/io5";
import { FC, PropsWithChildren } from "react";
import Logo from "./Logo";
import ThemeToggleButton from "./ThemeToggleButton";

interface INextChakraLinkProps
  extends PropsWithChildren<LinkProps & Omit<ChakraLinkProps, "as">> {
  path: string;
}

const LinkItem: FC<INextChakraLinkProps> = ({
  href,
  path,
  target,
  children,
  as,
  ...props
}) => {
  const active = path === href;
  const inactiveColor = useColorModeValue("gray200", "whiteAlpha.900");
  return (
    <NextLink href={href} passHref scroll={false}>
      <Link
        p={2}
        bg={active ? "grassTeal" : undefined}
        color={active ? "#202023" : inactiveColor}
        target={target}
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  );
};

interface INavbarProps extends BoxProps {
  path: string;
}

const Navbar: FC<INavbarProps> = (props) => {
  const { path } = props;

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue("#ffffff40", "#20202380")}
      css={{ backdropFilter: "blur(10px)" }}
      zIndex={1}
      {...props}
    >
      <Container display="flex" p={2} maxW="container.md" flexWrap="wrap">
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={"tighter"}>
            <Logo />
          </Heading>
        </Flex>

        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href="/works" path={path}>
            Works
          </LinkItem>
          <LinkItem
            target="_blank"
            href="https://github.com/ByronMunozG/portfolio"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
          >
            <IoLogoGithub />
            Source
          </LinkItem>
        </Stack>

        <Flex flex={1} justify={{ md: "flex-end" }}>
          <ThemeToggleButton />

          <Box ml={2} display={{ base: "inline-block", md: "none" }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <NextLink href="/" passHref>
                  <MenuItem as={Link}>About</MenuItem>
                </NextLink>
                <NextLink href="/works" passHref>
                  <MenuItem as={Link}>Works</MenuItem>
                </NextLink>
                <MenuItem
                  as={Link}
                  href="https://github.com/ByronMunozG/portfolio"
                >
                  View Source
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
