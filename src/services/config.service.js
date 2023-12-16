import { API_URL } from "../setting";
import { makeApiRequest } from "../utils/api";
import { getLSUserToken } from "../utils/local";
import { handleResponse } from "../utils/response";

export const fetchUserCountryList = () => makeApiRequest(`${API_URL}/user/country_list/`, "GET");
export const fetchUserCategoryList = () => makeApiRequest(`${API_URL}/user/category_list/`, "GET");
export const fetchUserNoteTypeList = () => makeApiRequest(`${API_URL}/user/type_list/`, "GET");

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

export const updateAdminConfig = (value) => makeApiRequest(`${API_URL}/super_admin/config_post/`, "POST", value);

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

export const createCategory = (value) => makeApiRequest(`${API_URL}/super_admin/category_post/`, "POST", value);
export const updateCategory = (id, value) => makeApiRequest(`${API_URL}/super_admin/category_put/${id}/`, "PUT", value);
export const deleteCategory = (id) => makeApiRequest(`${API_URL}/super_admin/category_delete/${id}/`, "DELETE");
export const fetchCategory = (id) => makeApiRequest(`${API_URL}/super_admin/category/${id}/`, "GET");
export const fetchAllCategory = (search) => makeApiRequest(`${API_URL}/super_admin/categories/?search=${search}`, "GET");
