import React, { useState, useEffect } from "react";
import SigninModal from "../components/SigninModal";
import { signin } from "../actions";
import { connect } from "react-redux";

const SigninContainer = props => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    if (props.status.status === "success") {
      props.setModal(false);
    }
  }, [props.status]);
  console.log(props.token);
  return (
    <SigninModal
      {...{ username, setUsername, password, setPassword }}
      {...props}
    />
  );
};
const mapStateToProps = state => ({
  status: state.signinFetch,
  token: state.token
});

const mapDispatchToProps = dispatch => ({
  signin: (username, password) => dispatch(signin(username, password))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SigninContainer);
