import React, { Fragment } from "react";
import CreateCampaignDescription from "./CreateCampaignDescription";
import { DateTimeInput } from "semantic-ui-calendar-react";
import { Grid, Button, Icon } from "semantic-ui-react";

const styles = { item: { margin: "1em 0 0.25em 0" } };

const OptionForm = props => {
  const { title, description, choices, startDate, endDate, images } = props;
  return (
    <Fragment>
      <CreateCampaignDescription
        header="Set your election date and time"
        description="Set your election start and end date"
      />
      <div>
        <DateTimeInput
          style={styles.item}
          clearable
          clearIcon={<Icon name="remove" color="red" />}
          size="large"
          placeholder="End date and time"
          iconPosition="left"
          value={props.endDate}
          onChange={(event, { value }) => props.onUpdateEnd(value)}
        />
      </div>
      <Grid.Row>
        <Button
          color="blue"
          style={{ margin: "1em 0" }}
          floated="right"
          onClick={() => {
            console.log({
              title,
              description,
              choices,
              images,
              startDate,
              endDate
            });
            props.setModal(true);
          }}
        >
          Submit
        </Button>
      </Grid.Row>
    </Fragment>
  );
};
export default OptionForm;
