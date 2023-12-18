import { combineReducers } from "redux";
import { authReducer } from "./Auth/authReducers";
import { profileReducer } from "./Profile/profileReducers";
import { configReducer } from "./Configuration/configReducers";
import { userNoteReducer } from "./UserNotes/userNoteReducers";
import { adminNoteReducer } from "./AdminNotes/adminNoteReducers";

const rootReducer = combineReducers({
  authReducer,
  profileReducer,
  configReducer,
  userNoteReducer,
  adminNoteReducer,
});

export default rootReducer;
