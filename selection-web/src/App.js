import React, { Fragment } from "react";
import Index from "./pages/Index";
import { Route } from "react-router-dom";
import CreateCampaign from "./pages/CreateCampaign";
import "semantic-ui-css/semantic.min.css";
import Register from "./pages/Register";
import Campaign from "./pages/Campaign";

const index = () => <Index />;
const createCampaign = () => <CreateCampaign />;
const register = () => <Register />;
const campaign = () => <Campaign />;

const App = () => (
  <Fragment>
    <Route exact path="/" component={index} />
    <Route exact path="/create-campaign" component={createCampaign} />
    <Route exact path="/join" component={register} />
    <Route exact path="/campaign" component={campaign} />
  </Fragment>
);

export default App;
