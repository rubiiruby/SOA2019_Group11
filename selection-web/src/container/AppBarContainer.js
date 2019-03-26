import React from "react";
import AppBar from "../component/AppBar";
import { updateValue } from "../actions";
import { connect } from "react-redux";
import { Responsive } from "semantic-ui-react";

const AppBarContainer = props => (
  <AppBar
    desktop={props.width > Responsive.onlyComputer.minWidth ? true : false}
    updateEvent={props.onUpdateWidth}
  />
);

const mapDispatchToProps = dispatch => ({
  onUpdateWidth: (event, { width }) => dispatch(updateValue("WIDTH", { width }))
});

const mapStateToProps = state => ({
  width: state.width
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppBarContainer);
