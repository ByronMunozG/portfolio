import { Container, Heading, SimpleGrid } from "@chakra-ui/react";

import thumbReactImageArea from "public/images/works/react-image-area_banner.png";
import thumbChilepostbot from "public/images/works/chilepostbot.jpg";
import thumbFut from "public/images/works/fut_tactics_home.png";
import ArticleLayout from "components/layouts/Article";
import Section from "components/Section";
import { WorkGridItem } from "components/GridItem";

const Works = () => (
  <ArticleLayout title="Works">
    <Container maxW="100%">
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="react-image-area"
            title="React Image Area"
            thumbnail={thumbReactImageArea}
          >
            My first attempt making a React Component Library - Select areas of
            an image with a simple component
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="fut-tactics"
            title="FUT Tactics "
            thumbnail={thumbFut}
          >
            A place where Fifa players can create, share and vote custom
            formation tactics.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="chilepostbot"
            title="Chilepostbot 1810"
            thumbnail={thumbChilepostbot}
          >
            A bot that post random generated memes to social media.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </ArticleLayout>
);

export default Works;
export { getServerSideProps } from "components/Chakra";
