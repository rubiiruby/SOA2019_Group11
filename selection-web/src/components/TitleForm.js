import React, { Fragment } from "react";
import { Grid, Input, Button } from "semantic-ui-react";
import withUpdateStep from "../containers/withUpdateStep";
import CreateCampaignDescription from "./CreateCampaignDescription";

const TitleForm = props => (
  <Fragment>
    <CreateCampaignDescription
      header="Write your election title"
      description="Brief your title short and clear, Focus on your election purpose"
    />

    <Grid.Row style={{ padding: "1em 0" }}>
      <Input focus autoFocus placeholder="Title" fluid />
    </Grid.Row>
    <Grid.Row>
      <Button onClick={() => props.onUpdateStep(1)} basic floated="right">
        Next
      </Button>
    </Grid.Row>
  </Fragment>
);

export default withUpdateStep(TitleForm);
