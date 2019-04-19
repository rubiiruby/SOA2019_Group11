import React from "react";
import { connect } from "react-redux";
import { updateString } from "../actions";
import OptionForm from "../components/OptionForm";

const OptionFormContainer = props => <OptionForm {...props} />;

const mapStateToProps = state => ({
  startDate: state.startDate,
  endDate: state.endDate,
  title: state.createCampaignTitle,
  description: state.createCampaignDes,
  choices: state.createCampaignChoices,
  images: state.previewImage
});

const mapDispatchToProps = dispatch => ({
  onUpdateStart: startDate => dispatch(updateString("START_DATE", startDate)),
  onUpdateEnd: endDate => dispatch(updateString("END_DATE", endDate))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OptionFormContainer);
