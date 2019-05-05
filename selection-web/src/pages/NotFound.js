import React from "react";
import AppBar from "../components/AppBar";
import withResponsiveWidth from "../containers/withResponsiveWidth";
import {
  Responsive,
  Header,
  Segment,
  Button,
  Divider
} from "semantic-ui-react";
import { Link } from "react-router-dom";

const NotFound = props => (
  <Responsive fireOnMount onUpdate={props.updateEvent}>
    <AppBar />
    <Divider hidden />
    <Segment basic textAlign="center">
      <Header
        style={{ fontSize: props.mobile ? "10em" : "18em", color: "darkgrey" }}
        size="huge"
      >
        <Header.Content>404</Header.Content>
        <Header.Subheader
          style={{ fontSize: props.mobile ? "1.5rem" : "2rem" }}
        >
          The page you were looking for doesn't exist
        </Header.Subheader>
      </Header>
      <Divider hidden />
      <Link to="/">
        <Button size={props.mobile ? "medium" : "big"} color="blue">
          GO BACK
        </Button>
      </Link>
    </Segment>
  </Responsive>
);

export default withResponsiveWidth(NotFound);
