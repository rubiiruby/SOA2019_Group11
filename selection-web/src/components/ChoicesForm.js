import React, { Fragment, useState } from "react";
import CreateCampaignDescription from "./CreateCampaignDescription";
import { Grid, Button, Icon, Item, Message } from "semantic-ui-react";
import withUpdateStep from "../containers/withUpdateStep";
import CreateChoice from "./CreateChoice";

const ChoicesForm = props => {
  const [choicesError, setChoicesError] = useState(false);
  return (
    <Fragment>
      <CreateCampaignDescription
        header="Add your election choices"
        description="Add your choices"
      />
      {choicesError && (
        <Message error content="Please enter at least two choices" />
      )}
      <Item.Group style={{ margin: "1em 0" }}>
        {props.choices.map((choice, index) => (
          <CreateChoice
            key={choice.id}
            choice={choice}
            index={index}
            {...props}
          />
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
          onClick={() => {
            if (props.choices.length >= 2) {
              props.onUpdateStep(3);
            } else {
              setChoicesError(true);
            }
          }}
          basic
          floated="right"
        >
          Next
        </Button>
      </Grid.Row>
    </Fragment>
  );
};

export default withUpdateStep(ChoicesForm);
