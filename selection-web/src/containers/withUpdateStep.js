import React from "react";
import { updateValue } from "../actions";
import { connect } from "react-redux";
import { compose } from "redux";

const withUpdateStep = WrappedComponent => props => {
  return <WrappedComponent {...props} />;
};

const mapStateToProps = state => ({
  step: state.createStep,
  currentStep: state.currentStep
});

const mapDispatchToProps = dispatch => ({
  onUpdateStep: step => {
    dispatch(updateValue("STEP", step));
    dispatch(updateValue("CURRENT_STEP", step));
  }
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withUpdateStep
);
