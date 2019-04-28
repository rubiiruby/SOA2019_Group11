import React from "react";
import { Segment, Grid, Responsive } from "semantic-ui-react";
import AppBar from "../components/AppBar";
import Steps from "../components/Steps";
import withUpdateStep from "../containers/withUpdateStep";
import TitleFormContainer from "../containers/TitleFormContainer";
import DescriptionFormContainer from "../containers/DescriptionFormContainer";
import { createGlobalStyle } from "styled-components";
import ChoicesFormContainer from "../containers/ChoicesFormContainer";
import withResponsiveWidth from "../containers/withResponsiveWidth";
import OptionFormContainer from "../containers/OptionFormContainer";

const GlobalStyle = createGlobalStyle` html body {
  height: auto;
  background-color: #fafafa;
  }
  #root  {
    height: auto;
    background-color: #fafafa;
  }
`;

const CreateCampaign = props => (
  <Responsive fireOnMount onUpdate={props.updateEvent}>
    {!props.mobile && <AppBar />}

    <Grid centered style={{ padding: "0 2em" }}>
      <Segment textAlign="left" style={{ margin: "4em 0 4em 0" }}>
        <Grid.Row>
          <Steps />
        </Grid.Row>
        {props.currentStep === 0 && <TitleFormContainer />}
        {props.currentStep === 1 && <DescriptionFormContainer />}
        {props.currentStep === 2 && <ChoicesFormContainer />}
        {props.currentStep === 3 && <OptionFormContainer />}
      </Segment>
    </Grid>
    <GlobalStyle />
  </Responsive>
);

export default withResponsiveWidth(withUpdateStep(CreateCampaign));
