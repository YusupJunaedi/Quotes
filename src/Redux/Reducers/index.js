import { combineReducers } from "redux";
import AppReducer from "./AppReducer";

const indexReducer = combineReducers({
  quote: AppReducer
});

export default indexReducer;
