import React from "react";
import { Step, Segment } from "semantic-ui-react";

const Steps = props => (
  <Segment
    basic
    style={{
      padding: "1.5em 0 0 0",
      margin: 0
    }}
  >
    <Step.Group fluid unstackable>
      <Step active>
        <Step.Content>
          <Step.Title>Title</Step.Title>
          {!props.mobile && (
            <Step.Description>Write your election title</Step.Description>
          )}
        </Step.Content>
      </Step>
      <Step active={props.step >= 1} disabled={props.step == 0}>
        <Step.Content>
          <Step.Title>Description </Step.Title>
          {!props.mobile && (
            <Step.Description>
              Explain your election information
            </Step.Description>
          )}
        </Step.Content>
      </Step>
      <Step active={props.step == 2} disabled={props.step <= 1}>
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

export default Steps;
