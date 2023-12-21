import {
  ADMIN_GET_MEMBER_SUCCESS,
  PROFILE_FAILURE,
  PROFILE_REQUEST,
  USERS_GET_PROFILE_SUCCESS,
  USERS_UPDATE_PROFILE_SUCCESS,
  ADMIN_UPDATE_PROFILE_SUCCESS,
  ADMIN_DEACTIVATE_MEMBER_SUCCESS,
  ADMIN_SELLER_SUCCESS,
  ADMIN_BUYER_SUCCESS,
} from "./profileActionTypes";

const initialState = {
  loading: false,
  user: {},
  members_list: [],
  seller_list: [],
  buyer_list: [],
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
    case ADMIN_UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    case ADMIN_BUYER_SUCCESS:
      return {
        ...state,
        loading: false,
        buyer_list: action.payload,
      };
    case ADMIN_SELLER_SUCCESS:
      return {
        ...state,
        loading: false,
        seller_list: action.payload,
      };
    case ADMIN_GET_MEMBER_SUCCESS:
      return {
        ...state,
        loading: false,
        members_list: action.payload,
      };
    case ADMIN_DEACTIVATE_MEMBER_SUCCESS:
      const updated_member_list = state.members_list.filter((item) => item.id !== action.payload);
      return {
        ...state,
        loading: false,
        members_list: updated_member_list,
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
