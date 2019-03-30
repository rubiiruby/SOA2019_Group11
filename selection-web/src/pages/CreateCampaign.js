import React, { Fragment } from "react";
import AppBarContainer from "../containers/AppBarContainer";
import { Segment, Grid } from "semantic-ui-react";
import StepsContainer from "../containers/StepsContainer";
import TitleForm from "../components/TitleForm";

const CreateCampaign = props => (
  <Fragment>
    <Segment style={{ margin: 0 }}>
      <AppBarContainer />
    </Segment>
    <Grid centered style={{ padding: "0 2em" }}>
      <Segment
        textAlign="left"
        basic
        style={{ paddingTop: "4em", paddingBottom: "0em", margin: 0 }}
      >
        <Grid.Row>
          <StepsContainer />
        </Grid.Row>
        <TitleForm />
      </Segment>
    </Grid>
  </Fragment>
);

export default CreateCampaign;
