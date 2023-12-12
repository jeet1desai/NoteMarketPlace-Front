import {
  ALL_CATEGORIES_FAILURE,
  ALL_CATEGORIES_REQUEST,
  ALL_CATEGORIES_SUCCESS,
  ADD_CATEGORY_REQUEST,
  ADD_CATEGORY_SUCCESS,
  ADD_CATEGORY_FAILURE,
  GET_CATEGORY_REQUEST,
  GET_CATEGORY_SUCCESS,
  GET_CATEGORY_FAILURE,
  EDIT_CATEGORY_REQUEST,
  EDIT_CATEGORY_SUCCESS,
  EDIT_CATEGORY_FAILURE,
  DELETE_CATEGORY_REQUEST,
  DELETE_CATEGORY_SUCCESS,
  DELETE_CATEGORY_FAILURE,
  SEARCHED_CATEGORY_REQUEST,
  SEARCHED_CATEGORY_SUCCESS,
  SEARCHED_CATEGORY_FAILURE,
} from "./categoryActionTypes";

const initialState = {
  categories: [],
  loading: false,
  category: {},
};

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
    case ADD_CATEGORY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ADD_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case ADD_CATEGORY_FAILURE:
      return {
        ...state,
        loading: false,
      };
    case GET_CATEGORY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        category: action.category,
      };
    case GET_CATEGORY_FAILURE:
      return {
        ...state,
        loading: false,
      };
    case EDIT_CATEGORY_REQUEST:
      return {
        ...state,
        loading: true,
        category: {},
      };
    case EDIT_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        category: action.category,
      };
    case EDIT_CATEGORY_FAILURE:
      return {
        ...state,
        loading: false,
      };
    case DELETE_CATEGORY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DELETE_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        categories: state.categories.map((cat) => (cat.id === action.category.id ? action.category : cat)),
      };
    case DELETE_CATEGORY_FAILURE:
      return {
        ...state,
        loading: false,
      };
    case SEARCHED_CATEGORY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SEARCHED_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        categories: action.categories,
      };
    case SEARCHED_CATEGORY_FAILURE:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}
