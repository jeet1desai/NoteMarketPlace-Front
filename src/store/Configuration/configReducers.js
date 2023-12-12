import { CONFIG_REQUEST, CONFIG_FAILURE, USER_GET_COUNTRY_SUCCESS } from "./configActionTypes";

const initialState = {
  loading: false,
  country_list: [],
};

export function configReducer(state = initialState, action) {
  switch (action.type) {
    case CONFIG_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case USER_GET_COUNTRY_SUCCESS:
      return {
        ...state,
        loading: false,
        country_list: action.payload,
      };
    case CONFIG_FAILURE:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}
