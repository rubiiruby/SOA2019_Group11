import React from "react";
import { Segment, Grid, Header } from "semantic-ui-react";

const CreateCampaignDescription = props => (
  <Segment basic textAlign="left" style={{ padding: "2em 0 0 0", margin: "0" }}>
    <Grid.Row style={{ padding: 0 }}>
      <Header as="h2">{props.header}</Header>
    </Grid.Row>
    <Grid.Row style={{ padding: "0.5em 0em" }}>
      <p>{props.description}</p>
    </Grid.Row>
  </Segment>
);

export default CreateCampaignDescription;
