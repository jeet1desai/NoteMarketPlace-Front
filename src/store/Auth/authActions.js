import { toast } from "react-toastify";

import { signIn } from "../../services/auth.service";
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from "./authActionTypes";

export function signInAction(signInDetails) {
  return (dispatch) => {
    dispatch(request());
    signIn(signInDetails).then(
      (data) => {
        dispatch(success(data));
        toast.success('Successfully Login! 👌👌');
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
    return { type: LOGIN_REQUEST };
  }
  function success(user) {
    return { type: LOGIN_SUCCESS, user };
  }
  function failure() {
    return { type: LOGIN_FAILURE };
  }
}
