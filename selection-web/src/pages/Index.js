import React, { Fragment } from "react";
import { Segment } from "semantic-ui-react";
import AppBar from "../components/AppBar";
import Landing from "../components/Landing";

const Index = () => (
  <Fragment>
    <Segment>
      <AppBar />
    </Segment>
    <Landing />
  </Fragment>
);

export default Index;
