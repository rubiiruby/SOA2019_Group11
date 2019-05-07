import React, {useEffect, useState} from "react";
import {
  Icon,
  Divider,
  Responsive,
  Segment,
  Item,
  Statistic,
  Progress,
  Header
} from "semantic-ui-react";
import AppBar from "../components/AppBar";
import withResponsiveWidth from "../containers/withResponsiveWidth";
import { getResult, getReport } from "../actions";
import { withRouter } from "react-router-dom";
import ErrorModal from "../components/ErrorModal";

const Summary = props => {
const [campaign, setCampaign] = useState([])
const [expired, setExpired] = useState(false)
const [report, setReport] = useState({})
const [maxValue, setMaxValue] = useState(0)

useEffect(() => {
  const fetchData = async id => {
    try {
      const response = await getResult(id);
      console.log(response.Candidates);
      setCampaign(response.Candidates);
      const report = await getReport(id)
      setReport(report)
      const max = Math.max.apply(Math, response.Candidates.map(function(o) { return o.voteAmount; }))
      setMaxValue(max)
      console.log(max)
    console.log(maxValue)
    } catch {
      setExpired(true)
    }
  }
  fetchData(props.match.params.id);

}, [])
  
  return (
    <Responsive fireOnMount onUpdate={props.updateEvent}>
      <AppBar />
      <Divider hidden section />
      {!expired &&
      <Segment basic style={{ margin: props.tablet ? 0 : "0 14em" }}>
        <div style={{ textAlign: "center" }}>
          <Statistic color="blue" style={{marginLeft:'2em'}}>
            <Statistic.Value>{report.voted}</Statistic.Value>
            <Statistic.Label>VOTES</Statistic.Label>
          </Statistic>
          <Statistic color="blue">
            <Statistic.Value>{report.visitor}</Statistic.Value>
            <Statistic.Label>VIEWS</Statistic.Label>
          </Statistic>
        </div>
        <Segment>
          <Item.Group divided>
            {campaign &&
              campaign.map(campaign => (
                <Item>
                  <Item.Image
                    size="small"
                    src={campaign.imageURL}
                  />
                  <Item.Content
                    style={{ textAlign: props.mobile ? "center" : "left" }}
                  >
                    <Header as="h1" size="huge">
                      {campaign.title}
                    </Header>
                    <Item.Description style={{ marginTop: "1em" }}>
                      <Progress
                        style={{}}
                        progress="value"
                        value={campaign.voteAmount}
                        total={report.voted}
                        
                        color={campaign.voteAmount === maxValue ? 'green' : 'grey'}
                      />
                    </Item.Description>
                  </Item.Content>
                </Item>
              ))}
          </Item.Group>
        </Segment>
      </Segment>
      }
      {expired && <ErrorModal open={expired} link='/' setModal={setExpired} />}
    </Responsive>
  );
};

export default withRouter(withResponsiveWidth(Summary));
