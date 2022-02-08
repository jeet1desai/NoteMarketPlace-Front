import { combineReducers } from "redux";
import { authReducer } from "./Auth/authReducers";
import { categoryReducer } from "./AdminCategory/categoryReducers";

const rootReducer = combineReducers({
  authReducer,
  categoryReducer,
});

export default rootReducer;
