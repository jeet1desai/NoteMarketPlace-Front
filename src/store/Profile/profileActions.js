import { toast } from "react-toastify";
import {
  deActiveMembers,
  fetchBuyer,
  fetchMembers,
  fetchProfile,
  fetchSeller,
  updateAdminProfile,
  updateUserProfile,
} from "../../services/profile.service";
import {
  ADMIN_BUYER_SUCCESS,
  ADMIN_DEACTIVATE_MEMBER_SUCCESS,
  ADMIN_GET_MEMBER_SUCCESS,
  ADMIN_SELLER_SUCCESS,
  ADMIN_UPDATE_PROFILE_SUCCESS,
  PROFILE_FAILURE,
  PROFILE_REQUEST,
  USERS_GET_PROFILE_SUCCESS,
  USERS_UPDATE_PROFILE_SUCCESS,
} from "./profileActionTypes";

const request = () => ({ type: PROFILE_REQUEST });

const failure = () => ({ type: PROFILE_FAILURE });

const success = (type, data) => ({ type: type, payload: data });

export function getProfileAction(id) {
  return (dispatch) => {
    dispatch(request());
    fetchProfile(id).then(
      (response) => {
        dispatch(success(USERS_GET_PROFILE_SUCCESS, response.data));
      },
      (error) => {
        dispatch(failure());
      }
    );
  };
}

export function updateUserProfileAction(value) {
  return (dispatch) => {
    dispatch(request());
    updateUserProfile(value).then(
      (response) => {
        toast.success("Successfully updated!");
        dispatch(success(USERS_UPDATE_PROFILE_SUCCESS, response.data));
      },
      (error) => {
        dispatch(failure());
      }
    );
  };
}

export function updateAdminProfileAction(value) {
  return (dispatch) => {
    dispatch(request());
    updateAdminProfile(value).then(
      (response) => {
        toast.success("Successfully updated!");
        dispatch(success(ADMIN_UPDATE_PROFILE_SUCCESS, response.data));
      },
      (error) => {
        dispatch(failure());
      }
    );
  };
}

export function getMembersAction(search) {
  return (dispatch) => {
    dispatch(request());
    fetchMembers(search).then(
      (response) => {
        dispatch(success(ADMIN_GET_MEMBER_SUCCESS, response.data));
      },
      (error) => {
        dispatch(failure());
      }
    );
  };
}

export function deActivateMemberAction(id) {
  return (dispatch) => {
    dispatch(request());
    deActiveMembers(id).then(
      (response) => {
        toast.success("Successfully deactivated!");
        dispatch(success(ADMIN_DEACTIVATE_MEMBER_SUCCESS, id));
      },
      (error) => {
        dispatch(failure());
      }
    );
  };
}

export function getSellerAction() {
  return (dispatch) => {
    dispatch(request());
    fetchSeller().then(
      (response) => {
        dispatch(success(ADMIN_SELLER_SUCCESS, response.data));
      },
      (error) => {
        dispatch(failure());
      }
    );
  };
}

export function getBuyerAction() {
  return (dispatch) => {
    dispatch(request());
    fetchBuyer().then(
      (response) => {
        dispatch(success(ADMIN_BUYER_SUCCESS, response.data));
      },
      (error) => {
        dispatch(failure());
      }
    );
  };
}
