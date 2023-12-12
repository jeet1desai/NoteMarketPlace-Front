import { combineReducers } from "redux";
import { authReducer } from "./Auth/authReducers";
import { categoryReducer } from "./AdminCategory/categoryReducers";
import { profileReducer } from "./Profile/profileReducers";
import { configReducer } from "./Configuration/configReducers";
import { userNoteReducer } from "./UserNotes/userNoteReducers";

const rootReducer = combineReducers({
  authReducer,
  categoryReducer,
  profileReducer,
  configReducer,
  userNoteReducer,
});

export default rootReducer;
