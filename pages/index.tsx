import NextLink from "next/link";
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra,
  Flex,
  useToast,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { IoLogoInstagram, IoLogoGithub, IoMail } from "react-icons/io5";
import thumbReactImageArea from "public/images/works/react-image-area_banner.png";
import thumbChilepostbot from "public/images/works/chilepostbot.jpg";
import thumbFut from "public/images/works/fut_tactics_home.png";
import Image from "next/image";
import ArticleLayout from "components/layouts/Article";
import Section from "components/Section";
import Paragraph from "components/Paragraph";
import { BioSection, BioYear } from "components/Bio";
import { GridItem } from "components/GridItem";

const ProfileImage = chakra(Image, {
  shouldForwardProp: (prop) => ["width", "height", "src", "alt"].includes(prop),
});

const Home = () => {
  const toast = useToast();
  return (
    <ArticleLayout>
      <Container maxW="100%">
        <Box
          borderRadius="lg"
          mb={6}
          p={3}
          textAlign="center"
          bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
          css={{ backdropFilter: "blur(10px)" }}
        >
          Hello, I&apos;m a Software Developer based in Santiago, Chile!
        </Box>

        <Box display={{ md: "flex" }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Byron Mu&#241;oz
            </Heading>
            <p>Full Stack Developer</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign="center"
          >
            <Box
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              w="100px"
              h="100px"
              display="inline-block"
              borderRadius="full"
              overflow="hidden"
            >
              <ProfileImage
                src="/images/byron.jpg"
                alt="Profile image"
                borderRadius="full"
                width="100%"
                height="100%"
                priority={true}
              />
            </Box>
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            Byron is a full stack developer based in Santiago, Chile. With a
            passion for learning different topics related to
            programming/technology stuff. He has a knack for learning things
            fast, problem-solving and finding bugs. When he&apos;s not online
            loves hanging out with his wife and cats, sometimes playing Xbox and
            watching TV. Currently, he is working on a company called Option. In
            his free time, he works on his side project called{" "}
            <NextLink href="/works/fut-tactics" passHref scroll={false}>
              <Link>FUT Tactics</Link>
            </NextLink>
            .
          </Paragraph>
          <Flex justify="center" my={4}>
            <NextLink href="/works" passHref scroll={false}>
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My portfolio
              </Button>
            </NextLink>
          </Flex>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>2022 to present</BioYear>
            Works as a Full Stack developer at{" "}
            <Link href="https://www.option.cl/" target="_blank">
              Option
            </Link>
            .
          </BioSection>
          <BioSection>
            <BioYear>2020 - 2022</BioYear>
            Worked as a Full Stack developer and sometimes a DevOps engineer
            with the role of tech lead building an ERP App on a start-up called
            Temis Technology.
          </BioSection>
          <BioSection>
            <BioYear>2020</BioYear>
            Worked as a React developer in 2 projects from a start up called
            Wisely/Track & Trace.
          </BioSection>
          <BioSection>
            <BioYear>2018 - 2021</BioYear>
            Higher technical degree in Computer Analyst Programming (
            <q>Analista Programador Computacional</q> ) with two votes of
            distinction.
          </BioSection>
          <BioSection>
            <BioYear>2018 - 2020</BioYear>
            Freelance Developer.
          </BioSection>
          <BioSection>
            <BioYear>2015 - 2017</BioYear>Three years of computer science
            engineer (<q>Ingeniería Civil en Informática</q>) - Andrés Bello
            National University (drop out due to financial problems).
          </BioSection>
          <BioSection>
            <BioYear>1997</BioYear>
            Born in Santiago, Chile.
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I ♥
          </Heading>
          <Paragraph>
            Music, Playing Drums, Working on fun Side Projects, Game Development
            and especially my Wife/Cats.
          </Paragraph>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            On the web
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/ByronMunozG" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoGithub />}
                >
                  @ByronMunozG
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.instagram.com/penumbra.tsx"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoInstagram />}
                >
                  @penumbra.tsx
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoMail />}
                onClick={() => {
                  navigator.clipboard.writeText("byron.munoz.godoy@gmail.com");
                  toast({
                    title: "Copied to clipboard!",
                    status: "success",
                    duration: 1500,
                    isClosable: true,
                    position: "bottom",
                    variant: "solid",
                  });
                }}
              >
                byron.munoz.godoy@gmail.com
              </Button>
            </ListItem>
          </List>

          <SimpleGrid columns={[1, 2, 2]} gap={6} mt={1}>
            <GridItem
              href="https://www.npmjs.com/package/@bmunozg/react-image-area"
              title="react-image-area"
              thumbnail={thumbReactImageArea}
            >
              First attempt at making a component library with React.
            </GridItem>
            <GridItem
              href="https://fut-tactics.com/"
              title="FUT Tactics"
              thumbnail={thumbFut}
            >
              A place where Fifa players can create, share and vote custom
              formation tactics.
            </GridItem>
            <GridItem
              href="/works/chilepostbot"
              title="Chilepostbot 1810"
              thumbnail={thumbChilepostbot}
            >
              A bot that posts randomly generated memes to social media.
            </GridItem>
          </SimpleGrid>
        </Section>
      </Container>
    </ArticleLayout>
  );
};

export default Home;
export { getServerSideProps } from "components/Chakra";
