import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from "./authActionTypes";

let user = JSON.parse(localStorage.getItem("currentUser"));
const initialState = user ? { user, loading: false } : {};

export function loginReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.user,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}
