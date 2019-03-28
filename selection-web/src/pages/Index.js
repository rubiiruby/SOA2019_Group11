import React, { Fragment } from "react";
import AppBarContainer from "../containers/AppBarContainer";
import { Segment } from "semantic-ui-react";
import LandingContainer from "../containers/LandingContainer";

const Index = () => (
  <Fragment>
    <Segment>
      <AppBarContainer />
    </Segment>
    <LandingContainer />
  </Fragment>
);

export default Index;
