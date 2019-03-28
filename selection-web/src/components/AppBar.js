import React from "react";
import { Menu, Button, Responsive } from "semantic-ui-react";
import "../semantic/dist/semantic.min.css";

const AppBar = props => (
  <Responsive fireOnMount onUpdate={props.updateEvent}>
    <Menu
      color="orange"
      inverted
      borderless
      style={{
        padding: props.mobile ? "1em 1em" : "0em 10em",
        boxShadow: "none"
      }}
      fixed="top"
      size="large"
    >
      <Menu.Item as="h2" style={{ padding: 0 }} header>
        SELECTION
      </Menu.Item>
      <Menu.Item
        position="right"
        style={{ padding: props.mobile ? "0em 1em" : "1em 0em" }}
      >
        <Button
          inverted
          basic
          borderless={props.mobile.toString()}
          style={{ marginLeft: "0.5em" }}
        >
          Sign In
        </Button>
      </Menu.Item>
    </Menu>
  </Responsive>
);

export default AppBar;
