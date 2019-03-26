import React from "react";
import { Menu, Button, Responsive } from "semantic-ui-react";
import "../semantic/dist/semantic.min.css";

const AppBar = (desktop, updateEvent) => (
  <Responsive onUpdate={() => updateEvent}>
    <Menu
      borderless
      style={{
        padding: desktop ? "0em 0.5em" : "1em 10em"
      }}
      fixed="top"
      size="large"
    >
      <Menu.Item as="h2" style={{ padding: 0 }} header>
        SELECTION
      </Menu.Item>
      <Menu.Item
        position="right"
        style={{ padding: desktop ? "1em 0em" : "0em 1em" }}
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
