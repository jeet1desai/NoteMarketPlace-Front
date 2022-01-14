import { toast } from "react-toastify";

import { signIn, signUp } from "../../services/auth.service";
import { AUTH_REQUEST, AUTH_SUCCESS, AUTH_FAILURE } from "./authActionTypes";

export function signInAction(signInDetails) {
  return (dispatch) => {
    dispatch(request());
    signIn(signInDetails).then(
      (data) => {
        dispatch(success());
        toast.success("Successfully Login! 👌👌");
        localStorage.setItem("currentUser", JSON.stringify(data));
        if (data.user.isEmailVerified === false) {
          window.location.href = "/email-verification";
        } else if (data.user.role === 1) {
          window.location.href = "/";
        } else {
          window.location.href = "/admin/dashboard";
        }
      },
      (error) => {
        dispatch(failure());
      }
    );
  };
  function request() {
    return { type: AUTH_REQUEST };
  }
  function success() {
    return { type: AUTH_SUCCESS };
  }
  function failure() {
    return { type: AUTH_FAILURE };
  }
}

export function signUpAction(signUpDetails) {
  return (dispatch) => {
    dispatch(request());
    signUp(signUpDetails).then(
      (data) => {
        dispatch(success());
        toast.success("Successfully Signup! 👌👌");
        localStorage.setItem("currentUser", JSON.stringify(data));
        window.location.href = "/email-verification";
      },
      (error) => {
        dispatch(failure());
      }
    );
  };
  function request() {
    return { type: AUTH_REQUEST };
  }
  function success() {
    return { type: AUTH_SUCCESS };
  }
  function failure() {
    return { type: AUTH_FAILURE };
  }
}
