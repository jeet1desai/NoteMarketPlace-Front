import {
  ADMIN_APPROVE_UPDATE_SUCCESS,
  ADMIN_DELETE_SPAM_REPORT_SUCCESS,
  ADMIN_GET_DOWNLOADED_NOTE_SUCCESS,
  ADMIN_GET_PUBLISHED_NOTE_SUCCESS,
  ADMIN_GET_REJECTED_NOTE_SUCCESS,
  ADMIN_GET_SPAM_REPORTS_SUCCESS,
  ADMIN_GET_STATS_SUCCESS,
  ADMIN_GET_UNDER_REVIEW_NOTE_SUCCESS,
  ADMIN_GET_USER_NOTE_SUCCESS,
  ADMIN_IN_REVIEW_UPDATE_SUCCESS,
  ADMIN_NOTE_FAILURE,
  ADMIN_NOTE_REQUEST,
  ADMIN_REJECT_UPDATE_SUCCESS,
  ADMIN_UNPUBLISH_UPDATE_SUCCESS,
} from "./adminNoteActionTypes";

const initialState = {
  loading: false,
  stats: null,
  member_notes: [],
  under_review_notes: [],
  published_notes: [],
  downloaded_notes: [],
  rejected_notes: [],
  spam_reports: [],
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
    case ADMIN_GET_STATS_SUCCESS:
      return {
        ...state,
        loading: false,
        stats: response,
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
      const filter_reject_list = state.rejected_notes.filter((item) => item.id !== response.id);
      return {
        ...state,
        loading: false,
        under_review_notes: filter_review_list,
        rejected_notes: filter_reject_list,
      };
    case ADMIN_UNPUBLISH_UPDATE_SUCCESS:
      const filter_publish_list = state.published_notes.filter((item) => item.id !== response.id);
      return {
        ...state,
        loading: false,
        published_notes: filter_publish_list,
      };
    case ADMIN_GET_SPAM_REPORTS_SUCCESS:
      return {
        ...state,
        loading: false,
        spam_reports: response,
      };
    case ADMIN_DELETE_SPAM_REPORT_SUCCESS:
      const filter_report_list = state.spam_reports.filter((item) => item.id !== response.id);
      return {
        ...state,
        loading: false,
        spam_reports: filter_report_list,
      };
    default:
      return state;
  }
}
