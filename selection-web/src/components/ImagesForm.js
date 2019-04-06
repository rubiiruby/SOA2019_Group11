import React, { Fragment } from "react";
import { Segment, Grid, Icon, Image } from "semantic-ui-react";

const ImagesForm = props => (
  <Fragment>
    <Grid.Row>
      <Grid.Column>
        {props.images.map((file, index) => (
          <Icon.Group key={file.name} size="big">
            <Image
              alt="preview"
              key={file.name}
              src={file.preview}
              size="small"
            />
            <Icon
              link
              onClick={() => props.onRemoveImage(index)}
              corner="top right"
              name="close"
            />
          </Icon.Group>
        ))}
      </Grid.Column>
    </Grid.Row>
    <Segment>
      <div {...props.getRootProps()}>
        <Icon name="upload" />
        {props.isDragActive ? (
          <a href="#up">Drop the files here ...</a>
        ) : (
          <a href="#up">
            Drag and drop some files here, or click to select files
          </a>
        )}
        <input {...props.getInputProps()} />
      </div>
    </Segment>
  </Fragment>
);

ImagesForm.defaultProps = { images: [] };

export default ImagesForm;
