import React from "react";
import {
  Icon,
  Divider,
  Responsive,
  Segment,
  Item,
  Statistic
} from "semantic-ui-react";
import AppBar from "../components/AppBar";
import withResponsiveWidth from "../containers/withResponsiveWidth";

const Summary = props => (
  <Responsive fireOnMount onUpdate={props.updateEvent}>
    <AppBar />
    <Divider hidden section />
    <Segment basic style={{ margin: props.tablet ? 0 : "0 14em" }}>
      <div style={{ textAlign: "center" }}>
        <Statistic color="blue">
          <Statistic.Value>5,550</Statistic.Value>
          <Statistic.Label>VOTES</Statistic.Label>
        </Statistic>
        <Statistic color="blue">
          <Statistic.Value>45,280</Statistic.Value>
          <Statistic.Label>VIEWS</Statistic.Label>
        </Statistic>
      </div>
      <Segment>
        <Item.Group divided>
          <Item>
            <Item.Image
              size="small"
              src="https://react.semantic-ui.com/images/wireframe/image.png"
            />

            <Item.Content>
              <Item.Header as="a">Cute Dog</Item.Header>
              <Item.Extra>
                <Icon color="green" name="check" /> 121 Votes
              </Item.Extra>
            </Item.Content>
          </Item>

          <Item>
            <Item.Image
              size="small"
              src="https://react.semantic-ui.com/images/wireframe/image.png"
            />

            <Item.Content>
              <Item.Header as="a">Cute Dog</Item.Header>
              <Item.Extra content="121 Votes" />
            </Item.Content>
          </Item>

          <Item>
            <Item.Image
              size="small"
              src="https://react.semantic-ui.com/images/wireframe/image.png"
            />
            <Item.Content header="Cute Dog" extra="121 Votes" />
          </Item>
        </Item.Group>
      </Segment>
    </Segment>
  </Responsive>
);

export default withResponsiveWidth(Summary);
