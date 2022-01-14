import { combineReducers } from "redux";
import { authReducer } from "./Auth/authReducers";

const rootReducer = combineReducers({
  authReducer,
});

export default rootReducer;
