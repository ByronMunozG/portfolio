import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "components/Work";
import NextLink from "next/link";
import P from "components/Paragraph";
import ArticleLayout from "components/layouts/Article";

const Work = () => (
  <ArticleLayout title="react-image-area">
    <Container>
      <Title>
        @bmunozg/react-image-area <Badge>2022</Badge>
      </Title>
      <P>
        The first attempt at making a component library with React, I made it
        for use on my side project called{" "}
        <NextLink href="/works/chilepostbot" passHref scroll={false}>
          <Link>Chilepostbot 1810</Link>
        </NextLink>
      </P>
      <P>
        <Link
          href="https://www.npmjs.com/package/@bmunozg/react-image-area"
          target="_blank"
        >
          The library <ExternalLinkIcon mx="2px" />
        </Link>
        consists of a component to select areas of an image, supporting touch
        selection and a custom renderer. Additionally, you can choose the
        selection unit between pixels and percentages.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <span>
            <Link
              href="https://byronmunozg.github.io/react-image-area"
              target="_blank"
            >
              Live example with Ladle
              <ExternalLinkIcon mx="2px" />
            </Link>
          </span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React / TypeScript / Vite / Ladle</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/react-image-area.png" alt="Website" />
      <WorkImage
        src="/images/works/react-image-area_01.png"
        alt="live example"
      />
    </Container>
  </ArticleLayout>
);

export default Work;
export { getServerSideProps } from "components/Chakra";
