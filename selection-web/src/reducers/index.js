import { combineReducers } from "redux";
import createValueWithNamedType from "./value";
import createImageWithNamedType from "./images";

export default combineReducers({
  width: createValueWithNamedType("WIDTH"),
  createStep: createValueWithNamedType("STEP"),
  currentStep: createValueWithNamedType("CURRENT_STEP"),
  previewImage: createImageWithNamedType("PREVIEW")
});
