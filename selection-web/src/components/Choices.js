import React from "react";
import { Segment, Form, Item, Button } from "semantic-ui-react";
import Choice from "../components/Choice";

const Choices = props => (
  <Segment style={{ margin: "0.5em" }}>
    <Form style={{ textAlign: "left" }}>
      <Item.Group unstackable divided>
        <Choice value={0} {...props} />
        <Choice value={1} {...props} />
        <Choice value={2} {...props} />
      </Item.Group>
      <Button fluid color="blue" size="large">
        Submit
      </Button>
    </Form>
  </Segment>
);

export default Choices;
