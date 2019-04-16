import React, { Fragment } from "react";
import CreateCampaignDescription from "./CreateCampaignDescription";

const OptionForm = props => (
  <Fragment>
    <CreateCampaignDescription
      header="Set your election date and time"
      description="Set your election start and end date"
    />
  </Fragment>
);

export default OptionForm;
