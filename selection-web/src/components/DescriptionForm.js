import React, { Fragment } from "react";
import { Grid, Form, Button } from "semantic-ui-react";
import ImagesFormContainer from "../containers/ImagesFormContainer";
import CreateCampaignDescription from "./CreateCampaignDescription";
import withUpdateStep from "../containers/withUpdateStep";

const DescriptionForm = props => (
  <Fragment>
    <CreateCampaignDescription
      header="Explain your election information"
      description="Add image, Explain the purpose of election"
    />

    <Grid.Row style={{ padding: 0 }}>
      <ImagesFormContainer />
      <Grid.Row>
        <Form>
          <Form.TextArea autoFocus rows={8} placeholder="Description" />
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
