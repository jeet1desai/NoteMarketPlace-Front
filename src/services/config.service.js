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

export const createAdmin = (value) => {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getLSUserToken()}`,
    },
    body: JSON.stringify(value),
  };
  return fetch(`${API_URL}/super_admin/admin_post/`, requestOptions).then(handleResponse);
};

export const updateAdmin = (id, value) => {
  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getLSUserToken()}`,
    },
    body: JSON.stringify(value),
  };
  return fetch(`${API_URL}/super_admin/admin_put/${id}/`, requestOptions).then(handleResponse);
};

export const deleteAdmin = (id) => {
  const requestOptions = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getLSUserToken()}`,
    },
  };
  return fetch(`${API_URL}/super_admin/admin_delete/${id}/`, requestOptions).then(handleResponse);
};

export const fetchAdmin = (id) => {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getLSUserToken()}`,
    },
  };
  return fetch(`${API_URL}/super_admin/admin/${id}/`, requestOptions).then(handleResponse);
};

export const fetchAllAdmin = (search) => {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getLSUserToken()}`,
    },
  };
  return fetch(`${API_URL}/super_admin/admins/?search=${search}`, requestOptions).then(handleResponse);
};
