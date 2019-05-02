import React from "react";
import { connect } from "react-redux";
import { updateString } from "../actions";
import OptionForm from "../components/OptionForm";

const OptionFormContainer = props => <OptionForm {...props} />;

const mapStateToProps = state => ({
  endDate: state.endDate
});

const mapDispatchToProps = dispatch => ({
  onUpdateEnd: endDate => dispatch(updateString("END_DATE", endDate))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OptionFormContainer);
