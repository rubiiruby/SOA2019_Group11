import React from "react";
import { Step, Segment } from "semantic-ui-react";
import { compose } from "redux";
import withResponsiveWidth from "../containers/withResponsiveWidth";
import withUpdateStep from "../containers/withUpdateStep";

const Steps = props => {
  const styles = {
    step: {
      padding: props.tablet ? "0.85em" : "1.2em"
    }
  };
  return (
    <Segment
      basic
      style={{
        padding: "1.5em 0 0 0",
        margin: 0
      }}
    >
      <Step.Group size={props.tablet ? "mini" : "small"} fluid unstackable>
        <Step
          style={styles.step}
          onClick={() => props.onUpdateStep(0)}
          active={props.step === 0 || props.currentStep === 0}
        >
          <Step.Content>
            <Step.Title>Title</Step.Title>
            {!props.mobile && (
              <Step.Description>Write your election title</Step.Description>
            )}
          </Step.Content>
        </Step>
        <Step
          style={styles.step}
          onClick={() => props.onUpdateStep(1)}
          active={props.step >= 1 && props.currentStep === 1}
          disabled={props.step === 0}
        >
          <Step.Content>
            <Step.Title>Description </Step.Title>
            {!props.mobile && (
              <Step.Description>
                Explain your election information
              </Step.Description>
            )}
          </Step.Content>
        </Step>
        <Step
          style={styles.step}
          onClick={() => props.onUpdateStep(2)}
          active={props.step >= 2 && props.currentStep === 2}
          disabled={props.step <= 1}
        >
          <Step.Content>
            <Step.Title>Choices</Step.Title>
            {!props.mobile && (
              <Step.Description>Add your election choices</Step.Description>
            )}
          </Step.Content>
        </Step>
        <Step
          style={styles.step}
          onClick={() => props.onUpdateStep(3)}
          active={props.step === 3 && props.currentStep === 3}
          disabled={props.step <= 2}
        >
          <Step.Content>
            <Step.Title>Options</Step.Title>
            {!props.mobile && (
              <Step.Description>Choose date and times</Step.Description>
            )}
          </Step.Content>
        </Step>
      </Step.Group>
    </Segment>
  );
};

export default compose(
  withUpdateStep,
  withResponsiveWidth
)(Steps);
