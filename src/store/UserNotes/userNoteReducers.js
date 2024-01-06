import {
  USERS_CREATE_NOTE_SUCCESS,
  USERS_DELETE_NOTE_SUCCESS,
  USERS_GET_NOTE_SUCCESS,
  USERS_GET_STATS_SUCCESS,
  USERS_IN_PROGRESS_NOTE_SUCCESS,
  USERS_PUBLISHED_NOTE_SUCCESS,
  USERS_UPDATE_NOTE_SUCCESS,
  USER_ADD_NOTE_SPAM_SUCCESS,
  USER_ADD_REVIEW_SUCCESS,
  USER_ALLOW_DOWNLOAD_NOTE_SUCCESS,
  USER_BUYER_REQUEST_NOTE_SUCCESS,
  USER_CLONE_NOTE_SUCCESS,
  USER_DELETE_NOTE_REVIEW_SUCCESS,
  USER_DOWNLOAD_NOTE_SUCCESS,
  USER_GET_NOTE_REVIEW_SUCCESS,
  USER_GET_SEARCH_NOTES_SUCCESS,
  USER_MY_DOWNLOAD_NOTE_SUCCESS,
  USER_MY_REJECTED_NOTE_SUCCESS,
  USER_MY_SOLD_NOTE_SUCCESS,
  USER_NOTE_FAILURE,
  USER_NOTE_REQUEST,
} from "./userNoteActionTypes";

const initialState = {
  loading: false,
  note: null,
  stats: null,
  pagination: null,
  search_notes: [],
  review_list: [],
  in_progress_note: [],
  published_note: [],
  buyer_request: [],
  my_download_note: [],
  my_sold_note: [],
  my_rejected_note: [],
};

export function userNoteReducer(state = initialState, action) {
  switch (action.type) {
    case USER_NOTE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case USERS_GET_STATS_SUCCESS:
      return {
        ...state,
        loading: false,
        stats: action.payload,
      };
    case USER_GET_SEARCH_NOTES_SUCCESS:
      return {
        ...state,
        loading: false,
        search_notes: action.payload.data,
        pagination: action.payload.pagination,
      };
    case USERS_GET_NOTE_SUCCESS:
      return {
        ...state,
        loading: false,
        note: action.payload,
      };
    case USER_GET_NOTE_REVIEW_SUCCESS:
      return {
        ...state,
        loading: false,
        review_list: action.payload,
      };
    case USER_DELETE_NOTE_REVIEW_SUCCESS:
      const updated_review_list = state.review_list.filter((item) => item.id !== action.payload.id);
      return {
        ...state,
        loading: false,
        review_list: updated_review_list,
      };
    case USER_MY_REJECTED_NOTE_SUCCESS:
      return {
        ...state,
        loading: false,
        my_rejected_note: action.payload,
        note: null,
      };
    case USER_MY_DOWNLOAD_NOTE_SUCCESS:
      return {
        ...state,
        loading: false,
        my_download_note: action.payload,
        note: null,
      };
    case USER_MY_SOLD_NOTE_SUCCESS:
      return {
        ...state,
        loading: false,
        my_sold_note: action.payload,
        note: null,
      };
    case USER_DOWNLOAD_NOTE_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case USERS_CREATE_NOTE_SUCCESS:
    case USER_ADD_REVIEW_SUCCESS:
    case USER_CLONE_NOTE_SUCCESS:
    case USER_ADD_NOTE_SPAM_SUCCESS:
      return {
        ...state,
        loading: false,
        note: null,
      };
    case USERS_UPDATE_NOTE_SUCCESS:
      const note = action.payload;
      const new_in_progress_list = state.in_progress_note.map((item) => (item.id === note.id ? note : item));
      return {
        ...state,
        loading: false,
        in_progress_note: new_in_progress_list,
      };
    case USERS_DELETE_NOTE_SUCCESS:
      const updated_in_progress_list = state.in_progress_note.filter((item) => item.id !== action.payload);
      return {
        ...state,
        loading: false,
        in_progress_note: updated_in_progress_list,
      };
    case USERS_IN_PROGRESS_NOTE_SUCCESS:
      return {
        ...state,
        loading: false,
        in_progress_note: action.payload,
        note: null,
      };
    case USERS_PUBLISHED_NOTE_SUCCESS:
      return {
        ...state,
        loading: false,
        published_note: action.payload,
        note: null,
      };
    case USER_BUYER_REQUEST_NOTE_SUCCESS:
      return {
        ...state,
        loading: false,
        buyer_request: action.payload,
        note: null,
      };
    case USER_ALLOW_DOWNLOAD_NOTE_SUCCESS:
      const updated_buyer_request_list = state.buyer_request.filter((item) => item.id !== action.payload.id);
      return {
        ...state,
        loading: false,
        buyer_request: updated_buyer_request_list,
      };
    case USER_NOTE_FAILURE:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}
