import React from "react";
import { Button, Modal, Form } from "semantic-ui-react";
import withResponsiveWidth from "../containers/withResponsiveWidth";
import { Link } from "react-router-dom";

const SigninModal = props => (
  <Modal
    style={{ width: !props.mobile && "420px", padding: "1em" }}
    size="small"
    trigger={
      <Button
        inverted
        basic
        borderless={props.mobile.toString()}
        style={{ marginLeft: "0.5em" }}
        onClick={() => props.setModal(true)}
      >
        Sign in
      </Button>
    }
    onClose={() => props.setModal(false)}
    open={props.modal}
  >
    <Modal.Content>
      <Form>
        <Form.Field>
          <label>E-mail or Phone number</label>
          <input
            autoComplete="current-password"
            value={props.username}
            onChange={e => props.setUsername(e.target.value)}
            placeholder="E-mail or Phone number"
          />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input
            autoComplete="current-password"
            value={props.password}
            onChange={e => props.setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
        </Form.Field>
        <Link to="/join">Sign up</Link>
        <Button
          onClick={() => props.signin(props.username, props.password)}
          color="blue"
          floated="right"
          loading={props.status.loading}
        >
          Sign in
        </Button>
      </Form>
    </Modal.Content>
  </Modal>
);

export default withResponsiveWidth(SigninModal);
