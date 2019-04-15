import { combineReducers } from "redux";
import createValueWithNamedType from "./value";
import createImageWithNamedType from "./images";
import createStringwithNamedType from "./string";
import createChoicesWithNamedType from "./choices";

export default combineReducers({
  width: createValueWithNamedType("WIDTH"),
  createStep: createValueWithNamedType("STEP"),
  currentStep: createValueWithNamedType("CURRENT_STEP"),
  previewImage: createImageWithNamedType("PREVIEW"),
  createCampaignTitle: createStringwithNamedType("CREATE_TITLE"),
  createCampaignDes: createStringwithNamedType("CREATE_DESCRIPTION"),
  createCampaignChoices: createChoicesWithNamedType("CREATE_CHOICES")
});
