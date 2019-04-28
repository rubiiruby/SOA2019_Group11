import React from "react";
import Choices from "../components/Choices";
import { connect } from "react-redux";
import { updateValue } from "../actions";

const ChoicesContainers = props => <Choices {...props} />;

const mapStateToProps = state => ({
  choice: state.selectedChoice
});

const mapDispatchToProps = dispatch => ({
  onUpdateChoice: value => {
    dispatch(updateValue("SELECTED_CHOICE", value));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChoicesContainers);
