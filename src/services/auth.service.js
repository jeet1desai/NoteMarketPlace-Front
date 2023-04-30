import { API_URL } from "../setting";
import { getLSUserToken } from "../utils/local";
import { handleResponse } from "../utils/response";

export const signIn = (user) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  };
  return fetch(`${API_URL}/auth/login`, requestOptions).then(handleResponse);
};

export const signUp = (user) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  };
  return fetch(`${API_URL}/auth/sign-up`, requestOptions).then(handleResponse);
};

export const verifyEmail = (id) => {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };
  return fetch(`${API_URL}/auth/email-verified/${id}`, requestOptions).then(
    handleResponse
  );
};

export const forgetPassword = (user) => {
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  };
  return fetch(`${API_URL}/auth/forgot-password`, requestOptions).then(
    handleResponse
  );
};

export const changePassword = (user) => {
  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      auth_token: getLSUserToken(),
    },
    body: JSON.stringify(user),
  };
  return fetch(`${API_URL}/auth/change-password`, requestOptions).then(
    handleResponse
  );
};
