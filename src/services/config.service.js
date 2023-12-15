import { API_URL } from "../setting";
import { getLSUserToken } from "../utils/local";
import { handleResponse } from "../utils/response";

export const fetchUserCountryList = () => {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getLSUserToken()}`,
    },
  };
  return fetch(`${API_URL}/user/country_list/`, requestOptions).then(handleResponse);
};

export const fetchUserCategoryList = () => {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getLSUserToken()}`,
    },
  };
  return fetch(`${API_URL}/user/category_list/`, requestOptions).then(handleResponse);
};

export const fetchUserNoteTypeList = () => {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getLSUserToken()}`,
    },
  };
  return fetch(`${API_URL}/user/type_list/`, requestOptions).then(handleResponse);
};

export const fetchAdminConfig = () => {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getLSUserToken()}`,
    },
  };
  return fetch(`${API_URL}/super_admin/config_get/`, requestOptions).then(handleResponse);
};

export const updateAdminConfig = (value) => {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getLSUserToken()}`,
    },
    body: JSON.stringify(value),
  };
  return fetch(`${API_URL}/super_admin/config_post/`, requestOptions).then(handleResponse);
};
