import { API_URL } from "../setting";
import { getLSUserToken } from "../utils/local";
import { handleResponse } from "../utils/response";

export const signIn = (user) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  };
  return fetch(`${API_URL}/auth/login/`, requestOptions).then(handleResponse);
};

export const signUp = (user) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  };
  return fetch(`${API_URL}/auth/register/`, requestOptions).then(handleResponse);
};

export const verifyEmail = (id) => {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };
  return fetch(`${API_URL}/auth/verify_email/${id}/`, requestOptions).then(handleResponse);
};

export const forgetPassword = (user) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  };
  return fetch(`${API_URL}/auth/reset_password/`, requestOptions).then(handleResponse);
};

export const changePassword = (user) => {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getLSUserToken()}`,
    },
    body: JSON.stringify(user),
  };
  return fetch(`${API_URL}/auth/change_password/`, requestOptions).then(handleResponse);
};

export const contactUs = (query) => {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(query),
  };
  return fetch(`${API_URL}/user/contact_us/`, requestOptions).then(handleResponse);
};
