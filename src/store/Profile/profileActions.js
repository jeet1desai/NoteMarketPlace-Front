import { toast } from "react-toastify";
import { fetchMembers, fetchProfile, updateUserProfile } from "../../services/profile.service";
import {
  ADMIN_GET_MEMBER_SUCCESS,
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
