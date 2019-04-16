import React, { Fragment } from "react";
import { Icon, Input, Segment, Item, Form, Image } from "semantic-ui-react";
import withUpdateStep from "../containers/withUpdateStep";
import Dropzone from "react-dropzone";

const Choice = props => {
  const { choice, index } = props;
  return (
    <Segment>
      <Icon
        link
        onClick={() => props.onRemoveChoice(index)}
        name="cancel"
        style={{ margin: "0 0 0.5em 95%" }}
      />
      <Item style={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}>
        <span
          style={{
            margin: "1em auto",
            paddingRight: "1em",
            display: "table"
          }}
        >
          {Object.getOwnPropertyNames(choice.image).length === 0 ? (
            <Dropzone
              onDrop={accepted => {
                props.onUploadImage(index, accepted);
              }}
              accept="image/*"
            >
              {({ getRootProps, getInputProps }) => (
                <Fragment>
                  <Icon
                    size="massive"
                    name="file image outline"
                    fitted
                    link
                    {...getRootProps()}
                  />
                  <input {...getInputProps()} />
                </Fragment>
              )}
            </Dropzone>
          ) : (
            <Icon.Group size="big">
              <Image alt="preview" src={choice.image.preview} size="small" />
              <Icon
                onClick={() => props.onRemoveImage(index)}
                link
                corner="top right"
                name="close"
              />
            </Icon.Group>
          )}
        </span>
        <Item.Content style={{ flexGrow: 2 }}>
          <Item.Header>
            <Form>
              <Form.Field
                inline
                style={{
                  display: "flex",
                  alignItems: "baseline"
                }}
              >
                <Input
                  style={{ width: "100%" }}
                  placeholder={`#${index + 1} Choice Title`}
                  defaultValue={choice.title}
                  onChange={event => {
                    props.onChangeTitle(index, event.target.value);
                  }}
                />
              </Form.Field>
              <Form.TextArea
                defaultValue={choice.description}
                onChange={event => {
                  event.preventDefault();
                  event.stopPropagation();
                  props.onChangeDescription(index, event.target.value);
                }}
                placeholder="Description"
                rows={3}
              />
            </Form>
          </Item.Header>
        </Item.Content>
      </Item>
    </Segment>
  );
};

export default withUpdateStep(Choice);