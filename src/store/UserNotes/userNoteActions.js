import { toast } from "react-toastify";
import {
  USERS_CREATE_NOTE_SUCCESS,
  USERS_DELETE_NOTE_SUCCESS,
  USERS_GET_NOTE_SUCCESS,
  USERS_GET_STATS_SUCCESS,
  USERS_IN_PROGRESS_NOTE_SUCCESS,
  USERS_PUBLISHED_NOTE_SUCCESS,
  USERS_UPDATE_NOTE_SUCCESS,
  USER_ADD_NOTE_SPAM_SUCCESS,
  USER_ADD_REVIEW_SUCCESS,
  USER_ALLOW_DOWNLOAD_NOTE_SUCCESS,
  USER_BUYER_REQUEST_NOTE_SUCCESS,
  USER_CLONE_NOTE_SUCCESS,
  USER_DELETE_NOTE_REVIEW_SUCCESS,
  USER_DOWNLOAD_NOTE_SUCCESS,
  USER_GET_NOTE_REVIEW_SUCCESS,
  USER_MY_DOWNLOAD_NOTE_SUCCESS,
  USER_MY_REJECTED_NOTE_SUCCESS,
  USER_MY_SOLD_NOTE_SUCCESS,
  USER_NOTE_FAILURE,
  USER_NOTE_REQUEST,
} from "./userNoteActionTypes";
import {
  addNoteSpam,
  addReview,
  allowDownloadNote,
  buyerRequest,
  cloneNote,
  createNote,
  deleteNote,
  deleteReview,
  fetchNote,
  fetchOwnerNote,
  fetchReview,
  fetchUserDashboardStat,
  inProgressNote,
  myDownloadNote,
  myRejectedNote,
  mySoldNote,
  publishedNote,
  updateNote,
  userDownloadNote,
} from "../../services/user-note.service";

const request = () => ({ type: USER_NOTE_REQUEST });

const failure = () => ({ type: USER_NOTE_FAILURE });

const success = (type, data) => ({ type: type, payload: data });

export function fetchUserDashboardStats() {
  return (dispatch) => {
    dispatch(request());
    fetchUserDashboardStat().then(
      (response) => {
        dispatch(success(USERS_GET_STATS_SUCCESS, response.data));
      },
      (error) => {
        dispatch(failure());
      }
    );
  };
}

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

export function fetchOwnerNoteAction(id) {
  return (dispatch) => {
    dispatch(request());
    fetchOwnerNote(id).then(
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
        toast.success(response.msg);
        if (response?.data) {
          window.open(response.data);
        }
        dispatch(success(USER_DOWNLOAD_NOTE_SUCCESS, response.data));
      },
      (error) => {
        dispatch(failure());
      }
    );
  };
}

export function userBuyerRequestAction(search) {
  return (dispatch) => {
    dispatch(request());
    buyerRequest(search).then(
      (response) => {
        dispatch(success(USER_BUYER_REQUEST_NOTE_SUCCESS, response.data));
      },
      (error) => {
        dispatch(failure());
      }
    );
  };
}

export function userAllowDownloadNoteAction(value) {
  return (dispatch) => {
    dispatch(request());
    allowDownloadNote(value).then(
      (response) => {
        dispatch(success(USER_ALLOW_DOWNLOAD_NOTE_SUCCESS, response.data));
      },
      (error) => {
        dispatch(failure());
      }
    );
  };
}

export function userMyDownloadNoteAction(search) {
  return (dispatch) => {
    dispatch(request());
    myDownloadNote(search).then(
      (response) => {
        dispatch(success(USER_MY_DOWNLOAD_NOTE_SUCCESS, response.data));
      },
      (error) => {
        dispatch(failure());
      }
    );
  };
}

export function userAddReviewAction(value) {
  return (dispatch) => {
    dispatch(request());
    addReview(value).then(
      (response) => {
        toast.success("Review added successfully!");
        dispatch(success(USER_ADD_REVIEW_SUCCESS, response.data));
      },
      (error) => {
        dispatch(failure());
      }
    );
  };
}

export function userMySoldNoteAction(search) {
  return (dispatch) => {
    dispatch(request());
    mySoldNote(search).then(
      (response) => {
        dispatch(success(USER_MY_SOLD_NOTE_SUCCESS, response.data));
      },
      (error) => {
        dispatch(failure());
      }
    );
  };
}

export function userMyRejectedNoteAction(search) {
  return (dispatch) => {
    dispatch(request());
    myRejectedNote(search).then(
      (response) => {
        dispatch(success(USER_MY_REJECTED_NOTE_SUCCESS, response.data));
      },
      (error) => {
        dispatch(failure());
      }
    );
  };
}

export function userCloneNoteAction(value) {
  return (dispatch) => {
    dispatch(request());
    cloneNote(value).then(
      (response) => {
        toast.success("Successfully cloned the note!");
        dispatch(success(USER_CLONE_NOTE_SUCCESS, response.data));
      },
      (error) => {
        dispatch(failure());
      }
    );
  };
}

export function getNoteReviewAction(id) {
  return (dispatch) => {
    dispatch(request());
    fetchReview(id).then(
      (response) => {
        dispatch(success(USER_GET_NOTE_REVIEW_SUCCESS, response.data));
      },
      (error) => {
        dispatch(failure());
      }
    );
  };
}

export function deleteNoteReviewAction(id) {
  return (dispatch) => {
    dispatch(request());
    deleteReview(id).then(
      (response) => {
        toast.success("Successfully deleted!");
        dispatch(success(USER_DELETE_NOTE_REVIEW_SUCCESS, response.data));
      },
      (error) => {
        dispatch(failure());
      }
    );
  };
}

export function addNoteSpamAction(value) {
  return (dispatch) => {
    dispatch(request());
    addNoteSpam(value).then(
      (response) => {
        toast.success("Successfully added!");
        dispatch(success(USER_ADD_NOTE_SPAM_SUCCESS, response.data));
      },
      (error) => {
        dispatch(failure());
      }
    );
  };
}
