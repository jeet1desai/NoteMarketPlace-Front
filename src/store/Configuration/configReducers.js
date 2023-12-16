import {
  CONFIG_REQUEST,
  CONFIG_FAILURE,
  USER_GET_COUNTRY_SUCCESS,
  USER_GET_CATEGORY_SUCCESS,
  USER_GET_NOTE_TYPE_SUCCESS,
  ADMIN_GET_CONFIG_SUCCESS,
  ADMIN_UPDATE_CONFIG_SUCCESS,
  ADMIN_CREATE_ADMIN_SUCCESS,
  ADMIN_GET_ADMINS_SUCCESS,
  ADMIN_GET_ADMIN_SUCCESS,
  ADMIN_UPDATE_ADMIN_SUCCESS,
  ADMIN_DELETE_ADMIN_SUCCESS,
  ADMIN_GET_CATEGORIES_SUCCESS,
  ADMIN_DELETE_CATEGORY_SUCCESS,
} from "./configActionTypes";

const initialState = {
  loading: false,
  country_list: [],
  category_list: [],
  note_type_list: [],
  config: null,
  admins_list: [],
  admin: null,
  categories_list: [],
  category: null,
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
    case USER_GET_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        category_list: action.payload,
      };
    case USER_GET_NOTE_TYPE_SUCCESS:
      return {
        ...state,
        loading: false,
        note_type_list: action.payload,
      };
    case ADMIN_GET_CONFIG_SUCCESS:
    case ADMIN_UPDATE_CONFIG_SUCCESS:
      return {
        ...state,
        loading: false,
        config: action.payload,
      };
    case ADMIN_CREATE_ADMIN_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case ADMIN_GET_ADMINS_SUCCESS:
      return {
        ...state,
        loading: false,
        admins_list: action.payload,
      };
    case ADMIN_GET_ADMIN_SUCCESS:
    case ADMIN_UPDATE_ADMIN_SUCCESS:
      return {
        ...state,
        loading: false,
        admin: action.payload,
      };
    case ADMIN_DELETE_ADMIN_SUCCESS:
      const admin = action.payload;
      const new_admin_list = state.admins_list.map((item) => (item.id === admin.id ? admin : item));
      return {
        ...state,
        loading: false,
        admins_list: new_admin_list,
      };
    case ADMIN_GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        loading: false,
        categories_list: action.payload,
      };
    case ADMIN_DELETE_CATEGORY_SUCCESS:
      const category = action.payload;
      const new_category_list = state.categories_list.map((item) => (item.id === category.id ? category : item));
      return {
        ...state,
        loading: false,
        categories_list: new_category_list,
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
