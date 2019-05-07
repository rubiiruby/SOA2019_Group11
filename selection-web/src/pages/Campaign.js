import React, { Fragment, useState, useEffect } from "react";
import {
  Segment,
  Header,
  Divider,
  Label,
  Dimmer,
  Loader
} from "semantic-ui-react";
import AppBar from "../components/AppBar";
import withResponsiveWidth from "../containers/withResponsiveWidth";
import { Responsive } from "semantic-ui-react";
import Carousel from "nuka-carousel";
import Choices from "../components/Choices";
import ConfirmModal from "../components/ConfirmModal";
import { connect } from "react-redux";
import { updateValue, getCampaign, vote } from "../actions";
import { withRouter } from "react-router-dom";
import ThanksModal from "../components/ThanksModal";
import ErrorModal from "../components/ErrorModal";
import moment from "moment";

const imageStyle = {
  maxWidth: "100%",
  width: "auto",
  maxHeight: "300px",
  height: "auto",
  display: "inline-block",
  minHeight: 295
};

const Campaign = props => {
  const [modal, setModal] = useState(false);
  const [campaign, setCampaign] = useState({ CampaignImages: [] });
  const [loading, setLoading] = useState(false);
  const [thankModal, setThankModal] = useState(false);
  const [errorModal, setErrorModal] = useState(false);
  useEffect(() => {
    const fetchData = async id => {
      try {
        const response = await getCampaign(id);
        console.log(response);
        setCampaign(response);
        setTimeout(() => {
          window.dispatchEvent(new Event("resize"));
        }, 0);
      } catch {
        props.history.push("/404");
      }

      setLoading(false);
    };
    setLoading(true);
    fetchData(props.match.params.id);

    // if (campaign) {
    //   setCampaign(campaign);
    // } else {
    //   props.history.push("/404");
    // }
  }, []);
  useEffect(() => {
    if (props.voteFetch.status === "success") {
      setThankModal(true);
    } else if (props.voteFetch.status === "fail") {
      setErrorModal(true);
    }
  });
  useEffect(() => {
    if (moment(campaign.expiredDate).isBefore(Date.now())) {
      props.history.push(`/campaign/${props.match.params.id}/summary`);
    }
  });

  const HeaderSection = () => (
    <div style={{ display: "inline-block" }}>
      <Header
        style={{ fontFamily: "arial, helvetica", fontSize: "3em" }}
        as="h1"
        textAlign="left"
      >
        {campaign.name}
        <Header.Subheader>
          <Label color="red">
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
      {!loading && (
        <Segment
          basic
          style={{ margin: props.tablet ? 0 : "0 14em", textAlign: "center" }}
        >
          {loading && (
            <Dimmer>
              <Loader />
            </Dimmer>
          )}
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
            {campaign.CampaignImages.map(image => (
              <img style={imageStyle} src={image.imageURL} />
            ))}
          </Carousel>
          <Divider hidden />
          {props.mobile && <HeaderSection />}
          <Divider hidden />

          <p style={{ textAlign: "left" }}>{campaign.detail}</p>

          <Divider hidden />
          <Choices
            {...props}
            choices={campaign.Candidates}
            setModal={setModal}
          />
          <ConfirmModal
            header="Confirm"
            content="You can't vote again, Are you really sure?"
            modal={modal}
            setModal={setModal}
            loading={props.voteFetch.status.loading}
            action={() => {
              console.log(
                `vote campaign ${campaign.id} choice ${
                  campaign.Candidates[props.choice].id
                }`
              );

              props.vote(campaign.id, campaign.Candidates[props.choice].id);
            }}
          />
          <ThanksModal open={thankModal} setModal={setThankModal} />
          <ErrorModal open={errorModal} setModal={setErrorModal} />
        </Segment>
      )}
      <Divider hidden section />
    </Responsive>
  );
};

const mapStateToProps = state => ({
  choice: state.selectedChoice,
  voteFetch: state.voteFetch
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
