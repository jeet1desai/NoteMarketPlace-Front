import {
  USERS_CREATE_NOTE_SUCCESS,
  USERS_DELETE_NOTE_SUCCESS,
  USERS_GET_NOTE_SUCCESS,
  USERS_IN_PROGRESS_NOTE_SUCCESS,
  USERS_PUBLISHED_NOTE_SUCCESS,
  USERS_UPDATE_NOTE_SUCCESS,
  USER_NOTE_FAILURE,
  USER_NOTE_REQUEST,
} from "./userNoteActionTypes";

const initialState = {
  loading: false,
  note: null,
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
    case USERS_GET_NOTE_SUCCESS:
      return {
        ...state,
        loading: false,
        note: action.payload,
      };
    case USERS_CREATE_NOTE_SUCCESS:
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
    case USER_NOTE_FAILURE:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}
