import { combineReducers } from "redux";
import createValueWithNamedType from "./value";
import createImageWithNamedType from "./images";
import createStringwithNamedType from "./string";
import createChoicesWithNamedType from "./choices";
import createFetchWithNamedType from "./fetch";
import createStringWithNamedType from "./string";

export default combineReducers({
  width: createValueWithNamedType("WIDTH"),
  createStep: createValueWithNamedType("STEP"),
  currentStep: createValueWithNamedType("CURRENT_STEP"),
  previewImage: createImageWithNamedType("PREVIEW"),
  createCampaignTitle: createStringwithNamedType("CREATE_TITLE"),
  createCampaignDes: createStringwithNamedType("CREATE_DESCRIPTION"),
  createCampaignChoices: createChoicesWithNamedType("CREATE_CHOICES"),
  startDate: createStringwithNamedType("START_DATE"),
  endDate: createStringwithNamedType("END_DATE"),
  selectedChoice: createValueWithNamedType("SELECTED_CHOICE"),
  signinFetch: createFetchWithNamedType("SIGNIN"),
  authorized: createStringWithNamedType("AUTHORIZED"),
  createCampaignFetch: createFetchWithNamedType("CREATE_CAMPAIGN")
});
