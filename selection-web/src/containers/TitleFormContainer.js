import React from "react";
import TitleForm from "../components/TitleForm";
import { connect } from "react-redux";
import { updateString } from "../actions";

const TitleFormContainer = props => <TitleForm {...props} />;

const mapStateToProps = state => ({
  title: state.createCampaignTitle
});

const mapDispatchToProps = dispatch => ({
  onUpdateTitle: title => dispatch(updateString("CREATE_TITLE", title))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TitleFormContainer);
