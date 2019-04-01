import React, { Fragment } from "react";
import {
  Segment,
  Grid,
  Header,
  Icon,
  Image,
  Form,
  Button
} from "semantic-ui-react";

const DescriptionForm = props => (
  <Fragment>
    <Segment
      basic
      textAlign="left"
      style={{ padding: "2em 0 0 0", margin: "0" }}
    >
      <Grid.Row style={{ padding: 0 }}>
        <Header as="h2">Explain your election information</Header>
      </Grid.Row>
      <Grid.Row style={{ padding: "0.5em 0em" }}>
        <p>Add image, Explain the purpose </p>
      </Grid.Row>
    </Segment>

    <Grid.Row style={{ padding: 0 }}>
      <Grid.Row>
        <Grid.Column>
          {props.images.map(file => (
            <Image
              alt="preview"
              key={file.name}
              src={file.preview}
              size="small"
              inline
            />
          ))}
        </Grid.Column>
      </Grid.Row>
      <Segment {...props.getRootProps()}>
        <Icon name="upload" />
        {props.isDragActive ? (
          <a href="#up">Drop the files here ...</a>
        ) : (
          <a href="#up">
            Drag and drop some files here, or click to select files
          </a>
        )}
        <input {...props.getInputProps()} />
      </Segment>
      <Grid.Row>
        <Form>
          <Form.TextArea rows={8} placeholder="Description" />
        </Form>
      </Grid.Row>
      <Grid.Row>
        <Button
          style={{ marginTop: "1em" }}
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

export default DescriptionForm;
