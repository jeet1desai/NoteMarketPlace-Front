import { toast } from "react-toastify";
import {
  USERS_CREATE_NOTE_SUCCESS,
  USERS_DELETE_NOTE_SUCCESS,
  USERS_GET_NOTE_SUCCESS,
  USERS_IN_PROGRESS_NOTE_SUCCESS,
  USERS_PUBLISHED_NOTE_SUCCESS,
  USERS_UPDATE_NOTE_SUCCESS,
  USER_DOWNLOAD_NOTE_SUCCESS,
  USER_NOTE_FAILURE,
  USER_NOTE_REQUEST,
} from "./userNoteActionTypes";
import { createNote, deleteNote, fetchNote, inProgressNote, publishedNote, updateNote, userDownloadNote } from "../../services/user-note.service";

const request = () => ({ type: USER_NOTE_REQUEST });

const failure = () => ({ type: USER_NOTE_FAILURE });

const success = (type, data) => ({ type: type, payload: data });

export function fetchNoteAction(id) {
  return (dispatch) => {
    dispatch(request());
    fetchNote(id).then(
      (response) => {
        dispatch(success(USERS_GET_NOTE_SUCCESS, response.data));
      },
      (error) => {
        dispatch(failure());
      }
    );
  };
}

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
        dispatch(success(USERS_CREATE_NOTE_SUCCESS, response.data));
      },
      (error) => {
        dispatch(failure());
      }
    );
  };
}

export function updateNoteAction(id, status, value) {
  return (dispatch) => {
    dispatch(request());
    updateNote(id, status, value).then(
      (response) => {
        if (status === 1) {
          toast.success("Successfully updated");
        } else {
          toast.success("Successfully published");
        }
        dispatch(success(USERS_UPDATE_NOTE_SUCCESS, response.data));
      },
      (error) => {
        dispatch(failure());
      }
    );
  };
}

export function deleteNoteAction(id) {
  return (dispatch) => {
    dispatch(request());
    deleteNote(id).then(
      (response) => {
        toast.success("Successfully deleted");
        dispatch(success(USERS_DELETE_NOTE_SUCCESS, id));
      },
      (error) => {
        dispatch(failure());
      }
    );
  };
}

export function getInProgressNoteAction(search) {
  return (dispatch) => {
    dispatch(request());
    inProgressNote(search).then(
      (response) => {
        dispatch(success(USERS_IN_PROGRESS_NOTE_SUCCESS, response.data));
      },
      (error) => {
        dispatch(failure());
      }
    );
  };
}

export function getPublishNoteAction(search) {
  return (dispatch) => {
    dispatch(request());
    publishedNote(search).then(
      (response) => {
        dispatch(success(USERS_PUBLISHED_NOTE_SUCCESS, response.data));
      },
      (error) => {
        dispatch(failure());
      }
    );
  };
}

export function userDownloadNoteAction(value) {
  return (dispatch) => {
    dispatch(request());
    userDownloadNote(value).then(
      (response) => {
        toast.success(response.msg)
        window.open(response.data)
        dispatch(success(USER_DOWNLOAD_NOTE_SUCCESS, response.data));
      },
      (error) => {
        dispatch(failure());
      }
    );
  };
}
