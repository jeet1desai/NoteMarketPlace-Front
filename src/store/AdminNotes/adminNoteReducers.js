import {
  ADMIN_GET_USER_NOTE_SUCCESS,
  ADMIN_NOTE_FAILURE,
  ADMIN_NOTE_REQUEST,
} from "./adminNoteActionTypes";

const initialState = {
  loading: false,
  member_notes: []
};

export function adminNoteReducer(state = initialState, action) {
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
        member_notes: action.payload
      };
    default:
      return state;
  }
}
