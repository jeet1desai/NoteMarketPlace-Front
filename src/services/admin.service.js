import { API_URL } from "../setting";
import { getLSUserToken } from "../utils/local";
import { handleResponse } from "../utils/response";

export const fetchCategories = () => {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      auth_token: getLSUserToken(),
    },
  };
  return fetch(`${API_URL}/admin/category/get-category`, requestOptions).then(handleResponse);
};

export const addCategory = (category) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json", token: getLSUserToken() },
    body: JSON.stringify(category),
  };
  return fetch(`${API_URL}/admin/settings/category`, requestOptions).then(handleResponse);
};

export const editCategory = (id, category) => {
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json", token: getLSUserToken() },
    body: JSON.stringify(category),
  };
  return fetch(`${API_URL}/admin/settings/category/${id}`, requestOptions).then(handleResponse);
};

export const getCategory = (id) => {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json", token: getLSUserToken() },
  };
  return fetch(`${API_URL}/admin/settings/category/${id}`, requestOptions).then(handleResponse);
};

export const deleteCategory = (id) => {
  const requestOptions = {
    method: "DELETE",
    headers: { "Content-Type": "application/json", token: getLSUserToken() },
  };
  return fetch(`${API_URL}/admin/settings/category/${id}`, requestOptions).then(handleResponse);
};

export const searchCategory = (search) => {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json", token: getLSUserToken() },
  };
  return fetch(`${API_URL}/admin/settings/category/search?search=${search}`, requestOptions).then(handleResponse);
};
