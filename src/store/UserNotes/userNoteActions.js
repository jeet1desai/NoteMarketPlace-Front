import { toast } from "react-toastify";
import { USERS_CREATE_NOTE_SUCCESS, USER_NOTE_FAILURE, USER_NOTE_REQUEST } from "./userNoteActionTypes";
import { createNote } from "../../services/user-note.service";

const request = () => {
  return { type: USER_NOTE_REQUEST };
};

const failure = () => {
  return { type: USER_NOTE_FAILURE };
};

export function createNoteAction(status, value) {
  return (dispatch) => {
    dispatch(request());
    createNote(status, value).then(
      (response) => {
        if (status === 1) {
          toast.success("Successfully created");
        } else {
          toast.success("Successfully published");
        }
        dispatch(success(response.data));
      },
      (error) => {
        dispatch(failure());
      }
    );
  };
  function success(note) {
    return { type: USERS_CREATE_NOTE_SUCCESS, payload: note };
  }
}
