import React, { Fragment } from "react";
import Index from "./pages/Index";
import { Route } from "react-router-dom";
import CreateCampaign from "./pages/CreateCampaign";

const index = () => <Index />;
const createCampaign = () => <CreateCampaign />;

const App = () => (
  <Fragment>
    <Route exact path="/" component={index} />
    <Route exact path="/create-campaign" component={createCampaign} />
  </Fragment>
);

export default App;
