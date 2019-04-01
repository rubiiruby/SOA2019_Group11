import React, { Fragment } from "react";
import AppBarContainer from "../containers/AppBarContainer";
import { Segment, Grid } from "semantic-ui-react";
import StepsContainer from "../containers/StepsContainer";
import { connect } from "react-redux";
import DescriptionFormContainer from "../containers/DescriptionFormContainer";
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
        {props.step === 0 && <TitleForm />}
        {props.step === 1 && <DescriptionFormContainer />}
      </Segment>
    </Grid>
  </Fragment>
);

const mapStateToProps = state => ({
  step: state.currentStep
});

export default connect(mapStateToProps)(CreateCampaign);
