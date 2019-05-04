import React, { useState, useEffect } from "react";
import { Button, Modal, Form, Message } from "semantic-ui-react";
import withResponsiveWidth from "../containers/withResponsiveWidth";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const SigninModal = props => {
  const [signinError, setSigninError] = useState(false);
  useEffect(() => {
    if (props.status.status === "fail") {
      setSigninError(true);
    }
  });
  return (
    <Modal
      style={{ width: !props.mobile && "420px", padding: "1em" }}
      size="small"
      trigger={props.trigger}
      onClose={() => {
        props.setModal(false);
        setSigninError(false);
      }}
      open={props.modal}
    >
      <Modal.Header>{props.header}</Modal.Header>
      <Modal.Content>
        <Form>
          <Form.Field error={signinError}>
            <label>E-mail or Phone number</label>
            <input
              autoComplete="current-password"
              onChange={e => props.setUsername(e.target.value)}
              placeholder="E-mail or Phone number"
            />
          </Form.Field>
          <Form.Field error={signinError}>
            <label>Password</label>
            <input
              autoComplete="current-password"
              onChange={e => props.setPassword(e.target.value)}
              type="password"
              placeholder="Password"
            />
          </Form.Field>
          {signinError && (
            <Message
              style={{ display: "block" }}
              error
              content="Please enter correct email or password"
            />
          )}
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
};

export default withResponsiveWidth(SigninModal);
