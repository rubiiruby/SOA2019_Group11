import React, { Fragment } from "react";
import CreateCampaignDescription from "./CreateCampaignDescription";
import { Grid, Button, Icon, Item } from "semantic-ui-react";
import withUpdateStep from "../containers/withUpdateStep";
import Choice from "./Choice";

const ChoicesForm = props => (
  <Fragment>
    <CreateCampaignDescription
      header="Add your election choices"
      description="Add your choices"
    />
    <Item.Group style={{ margin: "1em 0" }}>
      {props.choices.map((choice, index) => (
        <Choice key={choice.id} choice={choice} index={index} {...props} />
      ))}
    </Item.Group>
    <Grid.Row>
      <Button fluid basic onClick={() => props.onAddChoice()}>
        <Icon style={{ fontSize: "1.25em" }} name="add circle" size="large" />
      </Button>
    </Grid.Row>
    <Grid.Row>
      <Button
        style={{ margin: "1em 0" }}
        onClick={() => props.onUpdateStep(3)}
        basic
        floated="right"
      >
        Next
      </Button>
    </Grid.Row>
  </Fragment>
);

export default withUpdateStep(ChoicesForm);
