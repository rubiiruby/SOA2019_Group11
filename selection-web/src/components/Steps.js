import React from "react";
import { Step, Segment } from "semantic-ui-react";

const Steps = props => {
  return (
    <Segment
      basic
      style={{
        padding: "1.5em 0 0 0",
        margin: 0
      }}
    >
      <Step.Group fluid unstackable>
        <Step
          onClick={() => props.onUpdateCurrentStep(0)}
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
          onClick={() => props.onUpdateCurrentStep(1)}
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
          onClick={() => props.onUpdateCurrentStep(2)}
          active={props.step === 2 && props.currentStep === 2}
          disabled={props.step <= 1}
        >
          <Step.Content>
            <Step.Title>Choices</Step.Title>
            {!props.mobile && (
              <Step.Description>Add your election choices</Step.Description>
            )}
          </Step.Content>
        </Step>
      </Step.Group>
    </Segment>
  );
};

export default Steps;
