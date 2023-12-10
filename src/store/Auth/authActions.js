import { toast } from "react-toastify";

import {
  signIn,
  signUp,
  verifyEmail,
  forgetPassword,
  changePassword,
} from "../../services/auth.service";
import { AUTH_REQUEST, AUTH_SUCCESS, AUTH_FAILURE } from "./authActionTypes";
import { ROLES } from "../../utils/enum";

const request = () => {
  return { type: AUTH_REQUEST };
};

const success = (data) => {
  return { type: AUTH_SUCCESS, payload: data };
};

const failure = () => {
  return { type: AUTH_FAILURE };
};

export function signInAction(signInDetails) {
  return (dispatch) => {
    dispatch(request());
    signIn(signInDetails).then(
      (response) => {
        localStorage.setItem("currentUser", JSON.stringify(response.data));
        localStorage.setItem("currentToken", JSON.stringify(response.token.access));
        dispatch(success(response.data));
        if (response.data.role_id === ROLES.USER) {
          window.location.href = "/sell-note/my-profile";
        } else {
          window.location.href = "/admin/dashboard";
        }
      },
      (error) => {
        dispatch(failure());
      }
    );
  };
}

export function signUpAction(signUpDetails) {
  return (dispatch) => {
    dispatch(request());
    signUp(signUpDetails).then(
      (response) => {
        localStorage.setItem("currentUser", JSON.stringify(response.data));
        dispatch(success(response.data));
        window.location.href = "/email-verification";
      },
      (error) => {
        dispatch(failure());
      }
    );
  };
}

export function verificationMailAction(id) {
  return (dispatch) => {
    dispatch(request());
    verifyEmail(id).then(
      (data) => {
        dispatch(success());
        toast.success("Successfully Email Confirmed!");
        localStorage.clear();
      },
      (error) => {
        dispatch(failure());
      }
    );
  };
}

export function forgetPasswordAction(passwordDetails) {
  return (dispatch) => {
    dispatch(request());
    forgetPassword(passwordDetails).then(
      (data) => {
        toast.success("Login again!");
        dispatch(success());
      },
      (error) => {
        dispatch(failure());
      }
    );
  };
}

export function changePasswordAction(passwordDetails) {
  return (dispatch) => {
    dispatch(request());
    changePassword(passwordDetails).then(
      (response) => {
        toast.success("Login again!");
        dispatch(success(response.data));
        localStorage.clear();
        window.location.href = "/login";
      },
      (error) => {
        dispatch(failure());
      }
    );
  };
}
