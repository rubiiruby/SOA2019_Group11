import React from "react";
import { connect } from "react-redux";
import { Responsive } from "semantic-ui-react";
import Landing from "../components/Landing";

const LandingContainer = props => (
  <Landing
    mobile={props.width < Responsive.onlyMobile.maxWidth ? true : false}
  />
);

const mapStateToProps = state => ({
  width: state.width
});

export default connect(mapStateToProps)(LandingContainer);
