import { AUTH_REQUEST, AUTH_SUCCESS, AUTH_FAILURE } from "./authActionTypes";

const initialState = { loading: false };

export function authReducer(state = initialState, action) {
  switch (action.type) {
    case AUTH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case AUTH_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case AUTH_FAILURE:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}
