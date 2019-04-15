import React from "react";
import DescriptionForm from "../components/DescriptionForm";
import { connect } from "react-redux";
import { updateString } from "../actions";

const DescriptionFormContainer = props => <DescriptionForm {...props} />;

const mapStateToProps = state => ({
  description: state.createCampaignDes
});

const mapDispatchToProps = dispatch => ({
  onUpdateDes: description =>
    dispatch(updateString("CREATE_DESCRIPTION", description))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DescriptionFormContainer);
