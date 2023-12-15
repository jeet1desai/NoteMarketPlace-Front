import { toast } from "react-toastify";
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
import { createNote, deleteNote, fetchNote, inProgressNote, publishedNote, updateNote } from "../../services/user-note.service";

const request = () => {
  return { type: USER_NOTE_REQUEST };
};

const failure = () => {
  return { type: USER_NOTE_FAILURE };
};

export function fetchNoteAction(id) {
  return (dispatch) => {
    dispatch(request());
    fetchNote(id).then(
      (response) => {
        dispatch(success(response.data));
      },
      (error) => {
        dispatch(failure());
      }
    );
  };
  function success(note) {
    return { type: USERS_GET_NOTE_SUCCESS, payload: note };
  }
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
        dispatch(success(response.data));
      },
      (error) => {
        dispatch(failure());
      }
    );
  };
  function success(note) {
    return { type: USERS_UPDATE_NOTE_SUCCESS, payload: note };
  }
}

export function deleteNoteAction(id) {
  return (dispatch) => {
    dispatch(request());
    deleteNote(id).then(
      (response) => {
        toast.success("Successfully deleted");
        dispatch(success(id));
      },
      (error) => {
        dispatch(failure());
      }
    );
  };
  function success(note) {
    return { type: USERS_DELETE_NOTE_SUCCESS, payload: note };
  }
}

export function getInProgressNoteAction(search) {
  return (dispatch) => {
    dispatch(request());
    inProgressNote(search).then(
      (response) => {
        dispatch(success(response.data));
      },
      (error) => {
        dispatch(failure());
      }
    );
  };
  function success(note) {
    return { type: USERS_IN_PROGRESS_NOTE_SUCCESS, payload: note };
  }
}

export function getPublishNoteAction(search) {
  return (dispatch) => {
    dispatch(request());
    publishedNote(search).then(
      (response) => {
        dispatch(success(response.data));
      },
      (error) => {
        dispatch(failure());
      }
    );
  };
  function success(note) {
    return { type: USERS_PUBLISHED_NOTE_SUCCESS, payload: note };
  }
}
