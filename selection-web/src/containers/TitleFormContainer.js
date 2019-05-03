import React, { useState } from "react";
import TitleForm from "../components/TitleForm";
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

export default withUpdateStep(TitleFormContainer);
