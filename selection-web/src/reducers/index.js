import { combineReducers } from "redux";
import createValueWithNamedType from "./value";

export default combineReducers({
  width: createValueWithNamedType("WIDTH")
});
