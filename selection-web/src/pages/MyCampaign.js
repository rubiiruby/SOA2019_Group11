import React from "react";
import AppBar from "../components/AppBar";
import withResponsiveWidth from "../containers/withResponsiveWidth";
import {
  Responsive,
  Divider,
  Segment,
  Tab,
  Item,
  Button,
  Icon
} from "semantic-ui-react";
import CampaignItem from "../components/CampaignItem";
import { Link } from "react-router-dom";

const MyCampaign = props => {
  const panes = [
    {
      menuItem: "Voted",
      render: () => (
        <Tab.Pane>
          <Item.Group divided>
            <CampaignItem
              image="https://react.semantic-ui.com/images/wireframe/image.png"
              name="IT Ambassador"
              creator="Suppasek Manmunkij"
              expiredDate="14/5/2019"
              expired={false}
            />
            <CampaignItem
              image="https://react.semantic-ui.com/images/wireframe/image.png"
              name="IT Ambassador"
              creator="Suppasek Manmunkij"
              expiredDate="28/4/2019"
              expired={true}
            />
          </Item.Group>
        </Tab.Pane>
      )
    },
    {
      menuItem: "Created",
      render: () => (
        <Tab.Pane>
          <Link to="/create-campaign">
            <Button color="blue" fluid>
              <Icon name="add circle" />
              CREATE CAMPAIGN
            </Button>
          </Link>
          <Divider />
          <Item.Group divided>
            <CampaignItem
              image="https://react.semantic-ui.com/images/wireframe/image.png"
              name="IT Ambassador"
              creator="Suppasek Manmunkij"
              expiredDate="14/5/2019"
              expired={false}
            />
          </Item.Group>
        </Tab.Pane>
      )
    }
  ];

  return (
    <Responsive fireOnMount onUpdate={props.updateEvent}>
      <AppBar />
      <Divider hidden section />
      <Segment basic style={{ margin: props.tablet ? 0 : "0 14em" }}>
        <Tab panes={panes} />
      </Segment>
    </Responsive>
  );
};

export default withResponsiveWidth(MyCampaign);
