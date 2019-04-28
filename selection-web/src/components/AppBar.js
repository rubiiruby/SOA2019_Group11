import React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import withResponsiveWidth from "../containers/withResponsiveWidth";
import LoginModal from "./LoginModal";

const AppBar = props => (
  <Menu
    color="orange"
    inverted
    borderless
    style={{
      padding: props.mobile ? "1em 1em" : "0em 10em",
      boxShadow: "none",
      borderRadius: "0px"
    }}
    fluid
    attached="top"
    size="large"
  >
    <Menu.Item as="h2" style={{ padding: 0 }} header>
      <Link to="/">SELECTION</Link>
    </Menu.Item>

    <Menu.Item
      position="right"
      style={{ padding: props.mobile ? "0em 1em" : "1em 0em" }}
    >
      <LoginModal />
    </Menu.Item>
  </Menu>
);

export default withResponsiveWidth(AppBar);
