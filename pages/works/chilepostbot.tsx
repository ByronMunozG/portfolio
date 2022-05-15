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
      <P>A bot that post random generated memes to social media.</P>
      <P>
        The bot is a work in progress, a new improved version will be made and
        probably more bots will be added as the project progresses.
      </P>
      <P>
        It is being remade from scratch to make it more scalable and so it is
        easier for me to add new features. since the first version I did was
        with much less experience than I have now
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
