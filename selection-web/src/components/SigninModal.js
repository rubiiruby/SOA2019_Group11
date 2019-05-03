import React from "react";
import { Button, Modal, Form, Message } from "semantic-ui-react";
import withResponsiveWidth from "../containers/withResponsiveWidth";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();
const notify = () =>
  toast.error("Incorrect username or password", {
    position: toast.POSITION.BOTTOM_LEFT,
    hideProgressBar: true
  });
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
    <Modal.Header>Welcome Back</Modal.Header>
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
          {props.status.status === "fail" && 
    (<Message
      error
      header='Action Forbidden'
      content='You can only sign up for an account once with a given e-mail address.'/>)
      }
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
    {console.log(props.status.status)}
  </Modal>
);

export default withResponsiveWidth(SigninModal);
