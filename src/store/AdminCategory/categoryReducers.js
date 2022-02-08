import {
  ALL_CATEGORIES_FAILURE,
  ALL_CATEGORIES_REQUEST,
  ALL_CATEGORIES_SUCCESS,
} from "./categoryActionTypes";

const initialState = { categories: [], loading: false };

export function categoryReducer(state = initialState, action) {
  switch (action.type) {
    case ALL_CATEGORIES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ALL_CATEGORIES_SUCCESS:
      return {
        ...state,
        loading: false,
        categories: action.categories,
      };
    case ALL_CATEGORIES_FAILURE:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}
