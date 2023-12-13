import {
  USERS_CREATE_NOTE_SUCCESS,
  USERS_IN_PROGRESS_NOTE_SUCCESS,
  USERS_PUBLISHED_NOTE_SUCCESS,
  USER_NOTE_FAILURE,
  USER_NOTE_REQUEST,
} from "./userNoteActionTypes";

const initialState = {
  loading: false,
  note: {},
  in_progress_note: [],
  published_note: [],
};

export function userNoteReducer(state = initialState, action) {
  switch (action.type) {
    case USER_NOTE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case USERS_CREATE_NOTE_SUCCESS:
      return {
        ...state,
        loading: false,
        note: action.payload,
      };
    case USERS_IN_PROGRESS_NOTE_SUCCESS:
      return {
        ...state,
        loading: false,
        in_progress_note: action.payload,
      };
    case USERS_PUBLISHED_NOTE_SUCCESS:
      return {
        ...state,
        loading: false,
        published_note: action.payload,
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
