import React from "react";
import { Button, Checkbox, Form, Segment, Responsive } from "semantic-ui-react";
import AppBar from "../components/AppBar";
import withResponsiveWidth from "../containers/withResponsiveWidth";

const Register = props => (
  <Responsive fireOnMount onUpdate={props.updateEvent}>
    <AppBar />

    <Segment basic style={{ margin: props.mobile ? "4em 0" : "4em 14em" }}>
      <Form>
        <Form.Field width={props.mobile ? "8" : "7"}>
          <label>First Name</label>
          <input placeholder="First Name" />
        </Form.Field>
        <Form.Field width={props.mobile ? "8" : "7"}>
          <label>Last Name</label>
          <input placeholder="Last Name" />
        </Form.Field>
        <Form.Field width={props.mobile ? "9" : "7"}>
          <label>Email</label> <input placeholder="Email" />
        </Form.Field>
        <Form.Field width={props.mobile ? "9" : "7"}>
          <label>Password</label>
          <input placeholder="Password" type="password" />
        </Form.Field>
        <Button type="submit">Submit</Button>
      </Form>
    </Segment>
  </Responsive>
);

export default withResponsiveWidth(Register);
