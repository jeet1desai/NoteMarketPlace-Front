import { AUTH_REQUEST, AUTH_SUCCESS, AUTH_FAILURE } from "./authActionTypes";

const initialState = { loading: false, error: false, user: null };

export function authReducer(state = initialState, action) {
  switch (action.type) {
    case AUTH_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case AUTH_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        user: action.payload
      };
    case AUTH_FAILURE:
      return {
        ...state,
        loading: false,
        error: false,
      };
    default:
      return state;
  }
}
