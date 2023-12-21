import {
  ADMIN_APPROVE_UPDATE_SUCCESS,
  ADMIN_GET_DOWNLOADED_NOTE_SUCCESS,
  ADMIN_GET_PUBLISHED_NOTE_SUCCESS,
  ADMIN_GET_REJECTED_NOTE_SUCCESS,
  ADMIN_GET_UNDER_REVIEW_NOTE_SUCCESS,
  ADMIN_GET_USER_NOTE_SUCCESS,
  ADMIN_IN_REVIEW_UPDATE_SUCCESS,
  ADMIN_NOTE_FAILURE,
  ADMIN_NOTE_REQUEST,
  ADMIN_REJECT_UPDATE_SUCCESS,
} from "./adminNoteActionTypes";

const initialState = {
  loading: false,
  member_notes: [],
  under_review_notes: [],
  published_notes: [],
  downloaded_notes: [],
  rejected_notes: [],
};

export function adminNoteReducer(state = initialState, action) {
  const response = action.payload;
  switch (action.type) {
    case ADMIN_NOTE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ADMIN_NOTE_FAILURE:
      return {
        ...state,
        loading: false,
      };
    case ADMIN_GET_USER_NOTE_SUCCESS:
      return {
        ...state,
        loading: false,
        member_notes: response,
      };
    case ADMIN_GET_REJECTED_NOTE_SUCCESS:
      return {
        ...state,
        loading: false,
        rejected_notes: response,
      };
    case ADMIN_GET_DOWNLOADED_NOTE_SUCCESS:
      return {
        ...state,
        loading: false,
        downloaded_notes: response,
      };
    case ADMIN_GET_PUBLISHED_NOTE_SUCCESS:
      return {
        ...state,
        loading: false,
        published_notes: response,
      };
    case ADMIN_GET_UNDER_REVIEW_NOTE_SUCCESS:
      return {
        ...state,
        loading: false,
        under_review_notes: response,
      };
    case ADMIN_IN_REVIEW_UPDATE_SUCCESS:
      const updated_review_list = state.under_review_notes.map((item) => (item.id === response.id ? response : item));
      return {
        ...state,
        loading: false,
        under_review_notes: updated_review_list,
      };
    case ADMIN_APPROVE_UPDATE_SUCCESS:
    case ADMIN_REJECT_UPDATE_SUCCESS:
      const filter_review_list = state.under_review_notes.filter((item) => item.id !== response.id);
      return {
        ...state,
        loading: false,
        under_review_notes: filter_review_list,
      };
    default:
      return state;
  }
}
