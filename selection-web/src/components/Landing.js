import React from "react";
import { Link } from "react-router-dom";
import { Container, Header, Segment, Grid, Button, Image } from "semantic-ui-react";
import withResponsiveWidth from "../containers/withResponsiveWidth";
import landing from "../static/landing.png"

const Landing = props => (
  <Container fluid style={{ padding: props.mobile ? "0em 2em" : "0em 10.5em" }}>
    <Grid textAlign="center">
      <Grid.Row>
        <Segment basic style={{ padding: 0, margin: 0 }} textAlign="center">
        <Image style={{display:'inline-block'}} size='medium' src={landing}/>
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
          <Button color="blue">Start your election</Button>
        </Link>
      </Grid.Row>
    </Grid>
    
  </Container>
);

export default withResponsiveWidth(Landing);
