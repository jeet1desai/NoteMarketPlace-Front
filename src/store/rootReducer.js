import { combineReducers } from "redux";
import { authReducer } from "./Auth/authReducers";
import { categoryReducer } from "./AdminCategory/categoryReducers";
import { profileReducer } from "./Profile/profileReducers";

const rootReducer = combineReducers({
  authReducer,
  categoryReducer,
  profileReducer,
});

export default rootReducer;
