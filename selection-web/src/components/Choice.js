import React, { Fragment } from "react";
import { Divider, Checkbox, Item, Grid } from "semantic-ui-react";
import withResponsiveWidth from "../containers/withResponsiveWidth";

const Choice = props => (
  <Fragment>
    <Grid>
      <Grid.Row style={{ flexWrap: "nowrap" }}>
        <Grid.Column
          stretched
          width="2"
          verticalAlign="middle"
          style={{
            alignItems: "center"
          }}
        >
          <Checkbox
            radio
            fitted
            style={{ transform: "scale(1.5)", position: "relative" }}
            name="choice"
            value={props.value}
            checked={props.choice === props.value}
            onChange={(e, { value }) => props.onUpdateChoice(value)}
          />
        </Grid.Column>
        <Grid.Column width="14" style={{ padding: 0 }}>
          <Item>
            <Grid>
              <Grid.Column width={props.mobile ? 16 : 3}>
                <Item.Image size="small" src={props.image} />
              </Grid.Column>

              <Grid.Column width={props.mobile ? 16 : 13}>
                <Item.Content>
                  <Item.Header as="h2">{props.title}</Item.Header>
                  <Item.Description>{props.detail}</Item.Description>
                </Item.Content>
              </Grid.Column>
            </Grid>
          </Item>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    <Divider />
  </Fragment>
);

export default withResponsiveWidth(Choice);
