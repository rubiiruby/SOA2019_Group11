import React from "react";
import { Item, Label } from "semantic-ui-react";
import { Link } from "react-router-dom";

const CampaignItem = props => (
  <Item>
    <Item.Image size="small" src={props.image} />

    <Item.Content>
      <Item.Header>
        <Link to="/campaign">{props.name}</Link>
      </Item.Header>
      <Item.Meta> {props.creator} </Item.Meta>
      <Item.Extra>
        {!props.expired && `Expired in ${props.expiredDate}`}
        {props.expired && <Label>Closed</Label>}
      </Item.Extra>
    </Item.Content>
  </Item>
);

export default CampaignItem;
