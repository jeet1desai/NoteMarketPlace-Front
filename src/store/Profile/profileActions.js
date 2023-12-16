import { toast } from "react-toastify";
import { fetchProfile, updateUserProfile } from "../../services/profile.service";
import { PROFILE_FAILURE, PROFILE_REQUEST, USERS_GET_PROFILE_SUCCESS, USERS_UPDATE_PROFILE_SUCCESS } from "./profileActionTypes";

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
