import React, { useState } from "react";
import { Menu, Dropdown } from "semantic-ui-react";
import { Link } from "react-router-dom";
import withResponsiveWidth from "../containers/withResponsiveWidth";
import SigninContainer from "../containers/SigninContainer";
import { connect } from "react-redux";
import { signout } from "../actions";

const AppBar = props => {
  const [modal, setModal] = useState(false);
  return (
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
        {console.log(props.authorized)}
        {props.authorized !== "SIGNIN" && (
          <SigninContainer {...{ modal, setModal }} />
        )}
        {props.authorized === "SIGNIN" && (
          <Dropdown pointing="top right" trigger={<span>Suppasek</span>}>
            <Dropdown.Menu>
              <Dropdown.Item>
                <Link to="/user/campaign" style={{ textDecoration: "none" }}>
                  <span style={{ color: "black" }}>My Campaign</span>
                </Link>
              </Dropdown.Item>

              <Dropdown.Item
                text="Sign Out"
                icon="sign-out"
                onClick={() => props.signout()}
              />
            </Dropdown.Menu>
          </Dropdown>
        )}
      </Menu.Item>
    </Menu>
  );
};

const mapStateToProps = state => ({
  authorized: state.authorized
});

const mapDispatchToProps = dispatch => ({
  signout: () => dispatch(signout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withResponsiveWidth(AppBar));
