import React from "react";
import { Segment, Form, Item, Button } from "semantic-ui-react";
import Choice from "../components/Choice";

const Choices = props => (
  <Segment style={{ margin: "0.5em" }}>
    <Form style={{ textAlign: "left" }}>
      {props.choices && (
        <Item.Group unstackable divided>
          {props.choices.map((choice, index) => (
            <Choice key={index} {...choice} value={index} {...props} />
          ))}
        </Item.Group>
      )}
      <Button
        onClick={() => props.setModal(true)}
        fluid
        color="green"
        size="large"
      >
        VOTE
      </Button>
    </Form>
  </Segment>
);

Choice.defaultProps = {
  choices: []
};

export default Choices;
