import { combineReducers } from "redux";
import imageListReducer from "./imageListReducer";

export default combineReducers({
  imageListReducerState: imageListReducer,
});