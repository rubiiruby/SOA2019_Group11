import React, { Fragment } from "react";
import Index from "./pages/Index";
import { Route, Switch } from "react-router-dom";
import CreateCampaign from "./pages/CreateCampaign";
import "semantic-ui-css/semantic.min.css";
import Register from "./pages/Register";
import Campaign from "./pages/Campaign";
import MyCampaign from "./pages/MyCampaign";
import Summary from "./pages/Summary";
import NotFound from "./pages/NotFound";

const index = () => <Index />;
const createCampaign = () => <CreateCampaign />;
const register = () => <Register />;
const campaign = () => <Campaign />;
const myCampaign = () => <MyCampaign />;
const summary = () => <Summary />;
const notFound = () => <NotFound />;

const App = () => (
  <Fragment>
    <Switch>
      <Route exact path="/" component={index} />
      <Route exact path="/create-campaign" component={createCampaign} />
      <Route exact path="/join" component={register} />
      <Route exact path="/campaign/:id" component={campaign} />
      <Route exact path="/campaign/summary" component={summary} />
      <Route exact path="/user/campaign" component={myCampaign} />
      <Route path="*" component={notFound} />
    </Switch>
  </Fragment>
);

export default App;
