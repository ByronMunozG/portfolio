import { Container, Badge, Link, List, ListItem, Text } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "components/Work";
import P from "components/Paragraph";
import ArticleLayout from "components/layouts/Article";
import useNpmDownloads from "hooks/useNpmDownloads";

const Work = () => {
  const npmDownloads = useNpmDownloads("@bmunozg/react-image-area");

  return (
  <ArticleLayout title="react-image-area">
    <Container>
      <Title>
        @bmunozg/react-image-area <Badge>2022</Badge>
      </Title>
      <P>
        A React component library for defining interactive areas over an image.
        It supports mouse and touch selection, a custom area renderer, and lets
        you choose between pixels and percentages as the selection unit.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>npm</Meta>
          <Link
            href="https://www.npmjs.com/package/@bmunozg/react-image-area"
            target="_blank"
          >
            @bmunozg/react-image-area
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Demo</Meta>
          <Link
            href="https://byronmunozg.github.io/react-image-area"
            target="_blank"
          >
            Live example with Ladle
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React / TypeScript / Vite / Ladle</span>
        </ListItem>
        {npmDownloads !== null && (
          <ListItem>
            <Meta>Downloads</Meta>
            <Text as="span">{npmDownloads.toLocaleString()} last month</Text>
          </ListItem>
        )}
      </List>

      <WorkImage src="/images/works/react-image-area.png" alt="react-image-area component" />
      <WorkImage
        src="/images/works/react-image-area_01.png"
        alt="react-image-area live example"
      />
    </Container>
  </ArticleLayout>
  );
};

export default Work;
export { getServerSideProps } from "components/Chakra";
