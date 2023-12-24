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
import {
  changeNoteStatus,
  changeNoteStatusRemark,
  deleteSpamReport,
  fetchDashboardStat,
  fetchDownloadedNotes,
  fetchPublishedNotes,
  fetchRejectedNotes,
  fetchSpamReports,
  fetchUnderReviewNotes,
  fetchUserNotes,
} from "../../services/admin-note.service";

const request = () => ({ type: ADMIN_NOTE_REQUEST });

const failure = () => ({ type: ADMIN_NOTE_FAILURE });

const success = (type, data) => ({ type: type, payload: data });

export function fetchUserNoteAction(id) {
  return (dispatch) => {
    dispatch(request());
    fetchUserNotes(id).then(
      (response) => {
        dispatch(success(ADMIN_GET_USER_NOTE_SUCCESS, response.data));
      },
      (error) => {
        dispatch(failure());
      }
    );
  };
}

export function fetchDashboardStats() {
  return (dispatch) => {
    dispatch(request());
    fetchDashboardStat().then(
      (response) => {
        dispatch(success(ADMIN_GET_STATS_SUCCESS, response.data));
      },
      (error) => {
        dispatch(failure());
      }
    );
  };
}

export function fetchAdminNoteUnderReviewAction(search, seller) {
  return (dispatch) => {
    dispatch(request());
    fetchUnderReviewNotes(search, seller).then(
      (response) => {
        dispatch(success(ADMIN_GET_UNDER_REVIEW_NOTE_SUCCESS, response.data));
      },
      (error) => {
        dispatch(failure());
      }
    );
  };
}

export function fetchAdminPublishedNoteAction(search, seller, month) {
  return (dispatch) => {
    dispatch(request());
    fetchPublishedNotes(search, seller, month).then(
      (response) => {
        dispatch(success(ADMIN_GET_PUBLISHED_NOTE_SUCCESS, response.data));
      },
      (error) => {
        dispatch(failure());
      }
    );
  };
}

export function fetchAdminDownloadedNoteAction(search, seller, buyer) {
  return (dispatch) => {
    dispatch(request());
    fetchDownloadedNotes(search, seller, buyer).then(
      (response) => {
        dispatch(success(ADMIN_GET_DOWNLOADED_NOTE_SUCCESS, response.data));
      },
      (error) => {
        dispatch(failure());
      }
    );
  };
}

export function fetchAdminRejectedNoteAction(search, seller) {
  return (dispatch) => {
    dispatch(request());
    fetchRejectedNotes(search, seller).then(
      (response) => {
        dispatch(success(ADMIN_GET_REJECTED_NOTE_SUCCESS, response.data));
      },
      (error) => {
        dispatch(failure());
      }
    );
  };
}

export function updateNoteInReviewAction(value) {
  return (dispatch) => {
    dispatch(request());
    changeNoteStatus(value).then(
      (response) => {
        dispatch(success(ADMIN_IN_REVIEW_UPDATE_SUCCESS, response.data));
      },
      (error) => {
        dispatch(failure());
      }
    );
  };
}

export function updateNoteApproveAction(value) {
  return (dispatch) => {
    dispatch(request());
    changeNoteStatus(value).then(
      (response) => {
        dispatch(success(ADMIN_APPROVE_UPDATE_SUCCESS, response.data));
      },
      (error) => {
        dispatch(failure());
      }
    );
  };
}

export function updateNoteRejectAction(value) {
  return (dispatch) => {
    dispatch(request());
    changeNoteStatusRemark(value).then(
      (response) => {
        dispatch(success(ADMIN_REJECT_UPDATE_SUCCESS, response.data));
      },
      (error) => {
        dispatch(failure());
      }
    );
  };
}

export function updateNoteUnpublishAction(value) {
  return (dispatch) => {
    dispatch(request());
    changeNoteStatusRemark(value).then(
      (response) => {
        dispatch(success(ADMIN_UNPUBLISH_UPDATE_SUCCESS, response.data));
      },
      (error) => {
        dispatch(failure());
      }
    );
  };
}

export function getSpamReportsAction(search) {
  return (dispatch) => {
    dispatch(request());
    fetchSpamReports(search).then(
      (response) => {
        dispatch(success(ADMIN_GET_SPAM_REPORTS_SUCCESS, response.data));
      },
      (error) => {
        dispatch(failure());
      }
    );
  };
}

export function deleteSpamReportAction(id) {
  return (dispatch) => {
    dispatch(request());
    deleteSpamReport(id).then(
      (response) => {
        dispatch(success(ADMIN_DELETE_SPAM_REPORT_SUCCESS, response.data));
      },
      (error) => {
        dispatch(failure());
      }
    );
  };
}
