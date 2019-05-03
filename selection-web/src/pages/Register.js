import React, { useState } from "react";
import { Button, Form, Segment, Responsive, Grid } from "semantic-ui-react";
import AppBar from "../components/AppBar";
import withResponsiveWidth from "../containers/withResponsiveWidth";
import { connect } from "react-redux";
import { register } from "../actions";
import { Redirect } from "react-router";
import ConfirmModal from "../components/ConfirmModal";

const Register = props => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signupModal, setSignupModal] = useState(false);
  return (
    <Responsive fireOnMount onUpdate={props.updateEvent}>
      <AppBar />
      <Segment basic style={{ margin: props.mobile ? "4em 0" : "4em 14em" }}>
        <Grid>
          <Grid.Row centered>
            <Grid.Column width={props.tablet ? "9" : "7"}>
              <Form>
                <Form.Field>
                  <label>First Name</label>
                  <input
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                    placeholder="First Name"
                  />
                </Form.Field>
                <Form.Field>
                  <label>Last Name</label>
                  <input
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                    placeholder="Last Name"
                  />
                </Form.Field>
                <Form.Field>
                  <label>Email</label>
                  <input
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Email"
                  />
                </Form.Field>
                <Form.Field>
                  <label>Password</label>
                  <input
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                  />
                </Form.Field>
                <Button
                  onClick={() => setSignupModal(true)}
                  fluid
                  color="blue"
                  type="submit"
                >
                  Register
                </Button>
              </Form>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      {props.fetch.status === "success" && <Redirect to="/" exact push />}
      <ConfirmModal
        modal={signupModal}
        setModal={setSignupModal}
        header="Confirm"
        content="Are you really sure?"
        loading={props.fetch.loading}
        action={() => {
          props.onRegister({ firstName, lastName, email, password });
        }}
      />
    </Responsive>
  );
};

const mapStateToProps = state => ({
  fetch: state.registerFetch
});

const mapDispatchToProps = dispatch => ({
  onRegister: user => dispatch(register(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withResponsiveWidth(Register));
