import React from "react";
import Steps from "../components/Steps";
import { Responsive } from "semantic-ui-react";
import { connect } from "react-redux";

const StepsContainer = props => (
  <Steps
    step={props.step}
    mobile={props.width < Responsive.onlyMobile.maxWidth ? true : false}
  />
);

const mapStateToProps = state => ({
  width: state.width,
  step: state.createStep
});

export default connect(mapStateToProps)(StepsContainer);
