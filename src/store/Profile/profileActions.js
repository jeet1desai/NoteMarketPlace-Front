import { fetchProfile } from "../../services/profile.service";
import {
  PROFILE_FAILURE,
  PROFILE_REQUEST,
  PROFILE_SUCCESS,
} from "./profileActionTypes";

const request = () => {
  return { type: PROFILE_REQUEST };
};

const success = (user) => {
  return { type: PROFILE_SUCCESS, payload: user };
};

const failure = () => {
  return { type: PROFILE_FAILURE };
};

export function getProfileAction() {
  return (dispatch) => {
    dispatch(request());
    fetchProfile().then(
      (data) => {
        console.log(data);
        dispatch(success(data));
      },
      (error) => {
        dispatch(failure());
      }
    );
  };
}
