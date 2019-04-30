import React, { useState } from "react";
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
import ConfirmModal from "../components/ConfirmModal";
import { connect } from "react-redux";
import { createCampaign } from "../actions";

const GlobalStyle = createGlobalStyle` 
html body {
  height: auto;
  background-color: #fafafa;
  }
  #root  {
    height: auto;
    background-color: #fafafa;
  }
`;

const CreateCampaign = props => {
  const [modal, setModal] = useState(false);
  return (
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
          {props.currentStep === 3 && <OptionFormContainer {...{ setModal }} />}
        </Segment>
      </Grid>
      <ConfirmModal
        header="Confirm"
        content="Are you really sure?"
        action={() =>
          props.onCreateCampaign({
            startDate: props.startDate,
            endDate: props.endDate,
            title: props.title,
            description: props.description,
            choices: props.choices,
            images: props.images
          })
        }
        {...{ modal, setModal }}
      />

      <GlobalStyle />
    </Responsive>
  );
};

const mapStateToProps = state => ({
  startDate: state.startDate,
  endDate: state.endDate,
  title: state.createCampaignTitle,
  description: state.createCampaignDes,
  choices: state.createCampaignChoices,
  images: state.previewImage
});

const mapDispatchToProps = dispatch => ({
  onCreateCampaign: campaign => dispatch(createCampaign(campaign))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withResponsiveWidth(withUpdateStep(CreateCampaign)));
