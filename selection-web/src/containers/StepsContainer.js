import React from "react";
import Steps from "../components/Steps";
import { Responsive } from "semantic-ui-react";
import { connect } from "react-redux";
import { updateValue } from "../actions";

const StepsContainer = props => (
  <Steps
    step={props.step}
    currentStep={props.currentStep}
    mobile={props.width < Responsive.onlyMobile.maxWidth ? true : false}
    onUpdateCurrentStep={props.onUpdateCurrentStep}
  />
);

const mapStateToProps = state => ({
  step: state.createStep,
  currentStep: state.currentStep,
  width: state.width
});

const mapDispatchToProps = dispatch => ({
  onUpdateCurrentStep: step => dispatch(updateValue("CURRENT_STEP", step))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StepsContainer);
