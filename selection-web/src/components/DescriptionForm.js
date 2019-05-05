import React, { Fragment } from "react";
import { Grid, Form, Button } from "semantic-ui-react";
import ImagesFormContainer from "../containers/ImagesFormContainer";
import CreateCampaignDescription from "./CreateCampaignDescription";
import withUpdateStep from "../containers/withUpdateStep";

const DescriptionForm = props => (
  <Fragment>
    <CreateCampaignDescription
      header="Explain your campaign information"
      description="Add image, Explain the purpose of campaign"
    />
    <Grid.Row style={{ padding: 0 }}>
      <ImagesFormContainer />
      <Grid.Row>
        <Form>
          <Form.TextArea
            onChange={event => props.onUpdateDes(event.target.value)}
            rows={8}
            placeholder="Description"
            defaultValue={props.description}
          />
        </Form>
      </Grid.Row>
      <Grid.Row>
        <Button
          style={{ margin: "1em 0" }}
          onClick={() => props.onUpdateStep(2)}
          basic
          floated="right"
        >
          Next
        </Button>
      </Grid.Row>
    </Grid.Row>
  </Fragment>
);

DescriptionForm.defaultProps = { images: [] };

export default withUpdateStep(DescriptionForm);
