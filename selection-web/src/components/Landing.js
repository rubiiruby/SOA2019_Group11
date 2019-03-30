import React from "react";
import { Link } from "react-router-dom";
import { Container, Header, Segment, Grid, Button } from "semantic-ui-react";

const Landing = props => (
  <Container fluid style={{ padding: props.mobile ? "4em 2em" : "6em 10.5em" }}>
    <Grid textAlign="center">
      <Grid.Row>
        <Segment basic style={{ padding: 0, margin: 0 }} textAlign="center">
          <Header
            as="h1"
            style={{ fontSize: "3.5em", margin: 0, fontWeight: "bold" }}
          >
            Your Vote, Your Voice
          </Header>
        </Segment>
      </Grid.Row>
      <Grid.Row style={{ padding: 0 }}>
        <Segment basic style={{ padding: 0, margin: 0 }} textAlign="center">
          <p style={{ fontSize: "1.33em" }}>
            Selection is online voting platform that will help you manage your
            elections easily and securely.
          </p>
        </Segment>
      </Grid.Row>
      <Grid.Row style={{ padding: "2em" }}>
        <Link to="/create-campaign">
          <Button color="orange">Start your election</Button>
        </Link>
      </Grid.Row>
    </Grid>
  </Container>
);

export default Landing;
