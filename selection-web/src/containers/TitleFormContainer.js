import React, { useState } from "react";
import TitleForm from "../components/TitleForm";
import { connect } from "react-redux";
import { updateString } from "../actions";
import withUpdateStep from "../containers/withUpdateStep";

const TitleFormContainer = props => {
  const [titleError, setTitleError] = useState(false);
  const onClickNext = () => {
    if (props.title.length > 0) {
      setTitleError(false);
      props.onUpdateStep(1);
    } else {
      setTitleError(true);
    }
  };
  return <TitleForm {...{ onClickNext, titleError }} {...props} />;
};

const mapStateToProps = state => ({
  title: state.createCampaignTitle
});

const mapDispatchToProps = dispatch => ({
  onUpdateTitle: title => dispatch(updateString("CREATE_TITLE", title))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withUpdateStep(TitleFormContainer));
