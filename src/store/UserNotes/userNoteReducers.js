import { USERS_CREATE_NOTE_SUCCESS, USER_NOTE_FAILURE, USER_NOTE_REQUEST } from "./userNoteActionTypes";

const initialState = {
  loading: false,
  note: {},
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
    case USER_NOTE_FAILURE:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}
