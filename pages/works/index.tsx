import { Container, Heading, SimpleGrid } from "@chakra-ui/react";

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
            thumbnail="/images/works/react-image-area_banner.png"
          >
            A React component library for defining interactive image areas.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </ArticleLayout>
);

export default Works;
export { getServerSideProps } from "components/Chakra";
