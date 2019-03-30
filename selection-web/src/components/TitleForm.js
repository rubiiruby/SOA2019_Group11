import React, { Fragment } from "react";
import { Segment, Grid, Header, Input, Button } from "semantic-ui-react";

const TitleForm = () => (
  <Fragment>
    <Segment
      basic
      textAlign="left"
      style={{ padding: "2em 0 0 0", margin: "0" }}
    >
      <Grid.Row style={{ padding: 0 }}>
        <Header as="h2">Write your election title</Header>
      </Grid.Row>
      <Grid.Row style={{ padding: "0.5em 0em" }}>
        <p>Brief your title short and clear, Focus on your election purpose</p>
      </Grid.Row>
    </Segment>

    <Grid.Row style={{ padding: "1em 0" }}>
      <Input placeholder="Title" fluid />
    </Grid.Row>
    <Grid.Row>
      <Button basic floated="right">
        Next
      </Button>
    </Grid.Row>
  </Fragment>
);

export default TitleForm;
