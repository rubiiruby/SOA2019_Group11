import React, { Fragment } from "react";
import { Grid, Input, Button, Message } from "semantic-ui-react";
import CreateCampaignDescription from "./CreateCampaignDescription";

const TitleForm = props => (
  <Fragment>
    <CreateCampaignDescription
      header="Write your election title"
      description="Brief your title short and clear, Focus on your election purpose"
    />
    <Grid.Row style={{ padding: "1em 0" }}>
      {props.titleError && (
        <Message error content="Please enter your campaign title" />
      )}
      <Input
        onChange={event => props.onUpdateTitle(event.target.value)}
        placeholder="Title"
        fluid
        defaultValue={props.title}
      />
    </Grid.Row>
    <Grid.Row>
      <Button onClick={() => props.onClickNext()} basic floated="right">
        Next
      </Button>
    </Grid.Row>
  </Fragment>
);

export default TitleForm;
