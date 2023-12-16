import { combineReducers } from "redux";
import { authReducer } from "./Auth/authReducers";
import { profileReducer } from "./Profile/profileReducers";
import { configReducer } from "./Configuration/configReducers";
import { userNoteReducer } from "./UserNotes/userNoteReducers";

const rootReducer = combineReducers({
  authReducer,
  profileReducer,
  configReducer,
  userNoteReducer,
});

export default rootReducer;
