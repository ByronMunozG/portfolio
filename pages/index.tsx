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
  useToast,
  Text,
} from "@chakra-ui/react";
import {
  IoLogoInstagram,
  IoLogoGithub,
  IoMail,
  IoLogoLinkedin,
} from "react-icons/io5";
import thumbReactImageArea from "public/images/works/react-image-area_banner.png";
import Image from "next/image";
import useNpmDownloads from "hooks/useNpmDownloads";
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
  const npmDownloads = useNpmDownloads("@bmunozg/react-image-area");

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
          Hello, I&apos;m a Software Engineer based in Santiago, Chile!
        </Box>

        <Box display={{ md: "flex" }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Byron Mu&#241;oz
            </Heading>
            <p>Full Stack Software Engineer</p>
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
            About
          </Heading>
          <Paragraph>
            Byron is a full stack software engineer based in Santiago, Chile,
            with 7+ years of experience building scalable enterprise platforms
            across complex industries. He has a passion for learning, a knack
            for problem-solving and finding bugs, and a proven track record
            delivering high-impact platforms for leading organisations in Latin
            America. Outside of work, he spends time with his cats, play games,
            or works on game development projects.
          </Paragraph>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>Jun 2022 – Feb 2026</BioYear>
            Worked as a Full Stack Developer at Option SpA, building enterprise
            platforms for Codelco, LATAM Airlines, BHP, and Correos de Chile.
          </BioSection>
          <BioSection>
            <BioYear>Oct 2020 – Jun 2022</BioYear>
            Tech Lead &amp; Full Stack Developer at Temis Technology SpA, owning
            architecture and engineering standards for a SaaS platform.
          </BioSection>
          <BioSection>
            <BioYear>Jun 2020 – Sep 2020</BioYear>
            Frontend Developer at Wisely / Track &amp; Trace, building real-time
            monitoring interfaces for industrial environments.
          </BioSection>
          <BioSection>
            <BioYear>2018 – 2021</BioYear>
            Programmer Analyst degree at Duoc UC (
            <q>Analista Programador Computacional</q>).
          </BioSection>
          <BioSection>
            <BioYear>Apr 2018 – May 2020</BioYear>
            Freelance Full Stack Developer.
          </BioSection>
          <BioSection>
            <BioYear>2015 – 2017</BioYear>
            Computer Science initial cycle at Universidad Andrés Bello.
          </BioSection>
          <BioSection>
            <BioYear>1997</BioYear>
            Born in Santiago, Chile.
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Projects
          </Heading>
          <SimpleGrid columns={[1, 2, 2]} gap={6} mt={1}>
            <GridItem
              href="/works/react-image-area"
              title="react-image-area"
              thumbnail={thumbReactImageArea}
            >
              A React component library for defining interactive image areas.
              {npmDownloads !== null && (
                <Text fontSize={12} mt={1} color="gray.500">
                  {npmDownloads.toLocaleString()} downloads last month
                </Text>
              )}
            </GridItem>
          </SimpleGrid>
        </Section>

        <Section delay={0.4}>
          <Heading as="h3" variant="section-title">
            I ♥
          </Heading>
          <Paragraph>
            Music, Game Development, and especially my Cats.
          </Paragraph>
        </Section>

        <Section delay={0.5}>
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
                href="https://www.linkedin.com/in/byron-munoz-godoy/"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoLinkedin />}
                >
                  @byron-munoz-godoy
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
        </Section>
      </Container>
    </ArticleLayout>
  );
};

export default Home;
export { getServerSideProps } from "components/Chakra";
