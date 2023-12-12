import { PROFILE_FAILURE, PROFILE_REQUEST, USERS_GET_PROFILE_SUCCESS, USERS_UPDATE_PROFILE_SUCCESS } from "./profileActionTypes";

const initialState = {
  loading: false,
  user: {},
};

export function profileReducer(state = initialState, action) {
  switch (action.type) {
    case PROFILE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case USERS_GET_PROFILE_SUCCESS:
    case USERS_UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    case PROFILE_FAILURE:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}
