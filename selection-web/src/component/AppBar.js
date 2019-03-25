import React from "react";
import { Menu, Button, Responsive } from "semantic-ui-react";
import "../semantic/dist/semantic.min.css";

const desktop = window.innerWidth > Responsive.onlyTablet.minWidth;

const AppBar = props => (
  <Menu
    borderless
    style={{
      padding: desktop ? "1em 10em" : "0em 0.5em"
    }}
    fixed="top"
    size="large"
  >
    <Menu.Item as="h2" style={{ padding: 0 }} header>
      SELECTION
    </Menu.Item>
    <Menu.Item
      position="right"
      style={{ padding: desktop ? "0em 1em" : "1em 0em" }}
    >
      <Button>Sign in</Button>
      <Button as="a" primary style={{ marginLeft: "0.5em" }}>
        Sign Up
      </Button>
    </Menu.Item>
  </Menu>
);

export default AppBar;
