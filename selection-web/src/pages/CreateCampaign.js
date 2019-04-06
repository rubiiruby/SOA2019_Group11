import React, { Fragment } from "react";
import { Segment, Grid } from "semantic-ui-react";
import TitleForm from "../components/TitleForm";
import AppBar from "../components/AppBar";
import DescriptionForm from "../components/DescriptionForm";
import Steps from "../components/Steps";
import withUpdateStep from "../containers/withUpdateStep";
import ChoicesForm from "../components/ChoicesForm";

const CreateCampaign = props => (
  <Fragment>
    <Segment style={{ margin: 0 }}>
      <AppBar />
    </Segment>
    <Grid centered style={{ padding: "0 2em" }}>
      <Segment
        textAlign="left"
        basic
        style={{ paddingTop: "4em", paddingBottom: "0em", margin: 0 }}
      >
        <Grid.Row>
          <Steps />
        </Grid.Row>
        {props.currentStep === 0 && <TitleForm />}
        {props.currentStep === 1 && <DescriptionForm />}
        {props.currentStep === 2 && <ChoicesForm />}
      </Segment>
    </Grid>
  </Fragment>
);

export default withUpdateStep(CreateCampaign);
