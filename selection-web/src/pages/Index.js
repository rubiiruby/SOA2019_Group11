import React from "react";
import AppBar from "../components/AppBar";
import Landing from "../components/Landing";
import withResponsiveWidth from "../containers/withResponsiveWidth";
import { Responsive } from "semantic-ui-react";

const Index = props => (
  <Responsive fireOnMount onUpdate={props.updateEvent}>
    <AppBar />
    <Landing />
  </Responsive>
);

export default withResponsiveWidth(Index);
