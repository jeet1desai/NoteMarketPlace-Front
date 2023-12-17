import { toast } from "react-toastify";
import { ADMIN_GET_USER_NOTE_SUCCESS, ADMIN_NOTE_FAILURE, ADMIN_NOTE_REQUEST } from "./adminNoteActionTypes";
import { fetchUserNote } from "../../services/admin-note.service";

const request = () => ({ type: ADMIN_NOTE_REQUEST });

const failure = () => ({ type: ADMIN_NOTE_FAILURE });

const success = (type, data) => ({ type: type, payload: data });

export function fetchUserNoteAction(id) {
  return (dispatch) => {
    dispatch(request());
    fetchUserNote(id).then(
      (response) => {
        dispatch(success(ADMIN_GET_USER_NOTE_SUCCESS, response.data));
      },
      (error) => {
        dispatch(failure());
      }
    );
  };
}