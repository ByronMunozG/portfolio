import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "components/Work";
import P from "components/Paragraph";
import ArticleLayout from "components/layouts/Article";

const Work = () => (
  <ArticleLayout title="FUT Tactics">
    <Container>
      <Title>
        FUT Tactics <Badge>2022</Badge>
      </Title>
      <P>
        FUT Tactics is my most recent side project. It came up because I always
        struggle with my formation and custom tactics when I play Fifa. The only
        solution was to find a video on Youtube with custom tactics and pause
        through the video in the exact second to apply the same instructions in
        my formation.
      </P>
      <P>
        On the page, a user can register/login with auth0 and google, create a
        new tactic, browse different tactics with a formation filter, see the
        most recent and popular tactics, and vote if a tactic is good or bad
        with a like/dislike button.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <span>
            <Link href="https://fut-tactics.com/" target="_blank">
              fut-tactics.com
              <ExternalLinkIcon mx="2px" />
            </Link>
          </span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>
            <Link href="https://create.t3.gg/" target="_blank">
              T3 Stack
            </Link>{" "}
            / Vercel / PlanetScale / Mantine
          </span>
        </ListItem>
      </List>

      <WorkImage
        src="/images/works/fut_tactics_home.png"
        alt="Home page of FUT Tactics"
      />
      <WorkImage
        src="/images/works/fut_tactics_tactics.png"
        alt="Tactics list page"
      />
      <WorkImage
        src="/images/works/fut_tactics_tactic_view.jpeg"
        alt="Single tactic page"
      />
    </Container>
  </ArticleLayout>
);

export default Work;
export { getServerSideProps } from "components/Chakra";
