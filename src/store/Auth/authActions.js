import { toast } from "react-toastify";

import {
  signIn,
  signUp,
  verifyEmail,
  forgetPassword,
  changePassword,
} from "../../services/auth.service";
import { AUTH_REQUEST, AUTH_SUCCESS, AUTH_FAILURE } from "./authActionTypes";

const request = () => {
  return { type: AUTH_REQUEST };
};
const success = () => {
  return { type: AUTH_SUCCESS };
};
const failure = () => {
  return { type: AUTH_FAILURE };
};

export function signInAction(signInDetails) {
  return (dispatch) => {
    dispatch(request());
    signIn(signInDetails).then(
      (data) => {
        dispatch(success());
        toast.success("Successfully Login! 👌👌");
        localStorage.setItem("currentUser", JSON.stringify(data.data));
        localStorage.setItem("currentToken", JSON.stringify(data.auth_token));
        if (data.data.role_id === 3) {
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
      (data) => {
        dispatch(success());
        if (data.status === 201) {
          toast.success("Successfully Signup! 👌👌");
          localStorage.setItem(
            "currentUser",
            JSON.stringify({
              first_name: data.data.first_name,
              last_name: data.data.last_name,
              email: data.data.email,
            })
          );
          window.location.href = "/email-verification";
        }
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
        dispatch(success());
        if (data.status === 200) {
          toast.success(data.message);
        }
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
      (data) => {
        dispatch(success());
        toast.success(data.message);
        localStorage.clear();
        window.location.href = "/login";
      },
      (error) => {
        dispatch(failure());
      }
    );
  };
}
