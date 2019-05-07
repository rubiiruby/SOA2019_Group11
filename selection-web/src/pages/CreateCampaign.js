import React, { useState } from "react";
import { Segment, Grid, Responsive } from "semantic-ui-react";
import AppBar from "../components/AppBar";
import Steps from "../components/Steps";
import withUpdateStep from "../containers/withUpdateStep";
import TitleFormContainer from "../containers/TitleFormContainer";
import DescriptionForm from "../components/DescriptionForm";
import { createGlobalStyle } from "styled-components";
import ChoicesFormContainer from "../containers/ChoicesFormContainer";
import withResponsiveWidth from "../containers/withResponsiveWidth";
import OptionForm from "../components/OptionForm";
import ConfirmModal from "../components/ConfirmModal";
import { connect } from "react-redux";
import { createCampaign, resetCreate, updateString } from "../actions";
import { Redirect } from "react-router";
import SigninContainer from "../containers/SigninContainer";

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
  const [signinModal, setSigninModal] = useState(false);

  return (
    <Responsive fireOnMount onUpdate={props.updateEvent}>
      <AppBar display={props.mobile ? "none" : "flex"} />
      <Grid centered style={{ padding: "0 2em" }}>
        <Segment textAlign="left" style={{ margin: "4em 0 4em 0" }}>
          <Grid.Row>
            <Steps />
          </Grid.Row>
          {props.currentStep === 0 && <TitleFormContainer {...props} />}
          {props.currentStep === 1 && <DescriptionForm {...props} />}
          {props.currentStep === 2 && <ChoicesFormContainer />}
          {props.currentStep === 3 && (
            <OptionForm {...{ setModal, setSigninModal }} {...props} />
          )}
        </Segment>
      </Grid>
      <ConfirmModal
        header="Confirm"
        content="Are you really sure?"
        path="/campaign"
        loading={props.fetch.loading}
        action={() => {
          const choices = props.choices;
          choices.forEach(function(choice) {
            delete choice.id;
          });
          props.onCreateCampaign({
            expiredDate: props.endDate,
            name: props.title,
            detail: props.description,
            candidates: choices,
            images: props.images
          });
        }}
        {...{ modal, setModal }}
      />
      {props.fetch.status === "success" && (
        <Redirect to={`campaign/${props.fetch.response.data.id}`} exact push />
      )}
      <SigninContainer
        header="Please sign in or join us"
        setModal={setSigninModal}
        modal={signinModal}
      />
      <GlobalStyle />
    </Responsive>
  );
};

const mapStateToProps = state => ({
  endDate: state.endDate,
  title: state.createCampaignTitle,
  description: state.createCampaignDes,
  choices: state.createCampaignChoices,
  images: state.previewImage,
  fetch: state.createCampaignFetch,
  authorized: state.authorized
});

const mapDispatchToProps = dispatch => ({
  onCreateCampaign: campaign => dispatch(createCampaign(campaign)),
  onUpdateDes: description =>
    dispatch(updateString("CREATE_DESCRIPTION", description)),
  onUpdateEnd: endDate => dispatch(updateString("END_DATE", endDate)),
  onUpdateTitle: title => dispatch(updateString("CREATE_TITLE", title)),
  reset: () => dispatch(resetCreate())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withResponsiveWidth(withUpdateStep(CreateCampaign)));
