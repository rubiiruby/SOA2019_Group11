import React from "react";
import { Menu, Button, Responsive } from "semantic-ui-react";
import "../semantic/dist/semantic.min.css";

const AppBar = props => (
  <Responsive fireOnMount onUpdate={props.updateEvent}>
    <Menu
      borderless
      style={{
        padding: props.desktop ? "0em 10em" : "1em 1em"
      }}
      fixed="top"
      size="large"
    >
      <Menu.Item as="h2" style={{ padding: 0 }} header>
        SELECTION
      </Menu.Item>
      <Menu.Item
        position="right"
        style={{ padding: props.desktop ? "1em 0em" : "0em 1em" }}
      >
        <Button>Sign in</Button>
        <Button as="a" primary style={{ marginLeft: "0.5em" }}>
          Sign Up
        </Button>
      </Menu.Item>
    </Menu>
  </Responsive>
);

export default AppBar;
