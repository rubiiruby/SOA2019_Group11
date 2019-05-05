import React, { Fragment, useState, useEffect } from "react";
import { Segment, Header, Divider, Label } from "semantic-ui-react";
import AppBar from "../components/AppBar";
import withResponsiveWidth from "../containers/withResponsiveWidth";
import { Responsive } from "semantic-ui-react";
import Carousel from "nuka-carousel";
import Choices from "../components/Choices";
import ConfirmModal from "../components/ConfirmModal";
import { connect } from "react-redux";
import { updateValue, getCampaign, vote } from "../actions";
import { withRouter, Redirect } from "react-router-dom";

const imageStyle = {
  maxWidth: "100%",
  width: "auto",
  maxHeight: "300px",
  height: "auto",
  display: "inline-block"
};

const Campaign = props => {
  const [modal, setModal] = useState(false);
  const [campaign, setCampaign] = useState({ image: [] });
  useEffect(() => {
    const fetchData = async () => {
      const campaign = await getCampaign(props.match.params.id);
      console.log(campaign);
      if (campaign) {
        setCampaign(campaign);
      } else {
        props.history.push("/404");
      }
    };
    fetchData();
    setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
    }, 0);
  }, []);
  const HeaderSection = () => (
    <div style={{ display: "inline-block" }}>
      <Header
        style={{ fontFamily: "arial, helvetica", fontSize: "3em" }}
        as="h1"
        textAlign="left"
      >
        {campaign.name}
        <Header.Subheader>
          <Label color="blue" style={{ margin: "0.5em 0 0 0" }}>
            Suppasek Manmunkij
            <Label.Detail>Creator</Label.Detail>
          </Label>
          <Label
            color="red"
            style={
              props.width < 405
                ? { margin: "0.5em 0 0 0" }
                : { margin: "0.5em 0 0 0.5em" }
            }
          >
            {campaign.expiredDate}
            <Label.Detail>Expire Date</Label.Detail>
          </Label>
        </Header.Subheader>
      </Header>
    </div>
  );
  return (
    <Responsive fireOnMount onUpdate={props.updateEvent}>
      <AppBar />

      <Divider hidden section />
      <Segment
        basic
        style={{ margin: props.tablet ? 0 : "0 14em", textAlign: "center" }}
      >
        {!props.mobile && (
          <Fragment>
            <HeaderSection /> <Divider section hidden />
          </Fragment>
        )}

        <Carousel
          renderCenterLeftControls={({ previousSlide }) => null}
          renderCenterRightControls={({ nextSlide }) => null}
          width="80%"
          cellAlign="center"
          heightMode="max"
          style={{
            display: "inline-block"
          }}
        >
          {campaign.image.map(image => (
            <img style={imageStyle} src={image.imageURL} />
          ))}
        </Carousel>
        <Divider hidden />
        {props.mobile && <HeaderSection />}
        <Divider hidden />

        <p style={{ textAlign: "left" }}>{campaign.detail}</p>

        <Divider hidden />
        <Choices {...props} choices={campaign.candidates} setModal={setModal} />
        <ConfirmModal
          header="Confirm"
          content="You can't vote again, Are you really sure?"
          modal={modal}
          setModal={setModal}
          action={() => {
            console.log(
              `vote campaign ${campaign.id} choice ${
                campaign.candidates[props.choice].id
              }`
            );
            props.vote(campaign.id, campaign.candidates[props.choice].id);
          }}
        />
      </Segment>

      <Divider hidden section />
    </Responsive>
  );
};

const mapStateToProps = state => ({
  choice: state.selectedChoice
});

const mapDispatchToProps = dispatch => ({
  onUpdateChoice: value => dispatch(updateValue("SELECTED_CHOICE", value)),
  vote: (campaignId, choiceId) => dispatch(vote(campaignId, choiceId))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(withResponsiveWidth(Campaign))
);
