import { fetchProfile } from "../../services/profile.service";
import {
  PROFILE_FAILURE,
  PROFILE_REQUEST,
  USERS_GET_PROFILE_SUCCESS,
} from "./profileActionTypes";

const request = () => {
  return { type: PROFILE_REQUEST };
};

const failure = () => {
  return { type: PROFILE_FAILURE };
};

export function getProfileAction() {
  return (dispatch) => {
    dispatch(request());
    fetchProfile().then(
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
