import { combineReducers } from "redux";
import { loginReducer } from "./Auth/authReducers";

const rootReducer = combineReducers({
  loginReducer,
});

export default rootReducer;
