import { toast } from "react-toastify";
import { fetchProfile, updateUserProfile } from "../../services/profile.service";
import { PROFILE_FAILURE, PROFILE_REQUEST, USERS_GET_PROFILE_SUCCESS, USERS_UPDATE_PROFILE_SUCCESS } from "./profileActionTypes";

const request = () => {
  return { type: PROFILE_REQUEST };
};

const failure = () => {
  return { type: PROFILE_FAILURE };
};

export function getProfileAction(id) {
  return (dispatch) => {
    dispatch(request());
    fetchProfile(id).then(
      (response) => {
        dispatch(success(response.data));
      },
      (error) => {
        dispatch(failure());
      }
    );
  };
  function success(user) {
    return { type: USERS_GET_PROFILE_SUCCESS, payload: user };
  }
}

export function updateUserProfileAction(value) {
  return (dispatch) => {
    dispatch(request());
    updateUserProfile(value).then(
      (response) => {
        toast.success("Successfully updated!");
        dispatch(success(response.data));
      },
      (error) => {
        dispatch(failure());
      }
    );
  };
  function success(user) {
    return { type: USERS_UPDATE_PROFILE_SUCCESS, payload: user };
  }
}
