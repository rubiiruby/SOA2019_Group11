import React from "react";
import AppBarContainer from "./container/AppBarContainer";
import { Segment } from "semantic-ui-react";
import LandingContainer from "./container/LandingContainer";

const App = props => (
  <div>
    <Segment>
      <AppBarContainer />
    </Segment>
    <LandingContainer />
  </div>
);

export default App;
