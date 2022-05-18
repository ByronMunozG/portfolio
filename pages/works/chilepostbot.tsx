import { Container, Badge, List, ListItem } from "@chakra-ui/react";
import { Title, WorkImage, Meta } from "components/Work";
import P from "components/Paragraph";
import ArticleLayout from "components/layouts/Article";

const Work = () => (
  <ArticleLayout title="Chilepostbot 1810">
    <Container>
      <Title>
        Chilepostbot 1810 <Badge>2022</Badge>
      </Title>
      <P>A bot that posts randomly generated memes to social media.</P>
      <P>
        Currently, this bot is getting updated. An improved version is underway,
        adding more bots in the future.
      </P>
      <P>
        It is being redone from scratch to make it more scalable and easy to add
        new features since I made the first version with much less experience
        than the one I have now.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <span>TBD</span>
        </ListItem>
        <ListItem>
          <Meta>Front-end Stack</Meta>
          <span>Next.js / TypeScript / TailwindCSS</span>
        </ListItem>
        <ListItem>
          <Meta>Back-end Stack</Meta>
          <span>Nest.js / TypeScript / MongoDB</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/chilepostbot.jpg" alt="Website" />
      <WorkImage src="/images/works/chilepostbot_01.jpg" alt="Website" />
    </Container>
  </ArticleLayout>
);

export default Work;
export { getServerSideProps } from "components/Chakra";
