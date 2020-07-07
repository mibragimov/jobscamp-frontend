import { combineReducers } from "redux";
import authReducer from "./authReducer";
import jobReducer from "./jobReducer";
import profileReducer from "./profileReducer";

export default combineReducers({
  auth: authReducer,
  job: jobReducer,
  profile: profileReducer,
});
