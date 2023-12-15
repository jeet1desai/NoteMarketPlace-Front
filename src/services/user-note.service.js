import { API_URL } from "../setting";
import { getLSUserToken } from "../utils/local";
import { handleResponse } from "../utils/response";

export const fetchNote = (id) => {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getLSUserToken()}`,
    },
  };
  return fetch(`${API_URL}/note/get_note/${id}/`, requestOptions).then(handleResponse);
};

export const createNote = (status, value) => {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getLSUserToken()}`,
    },
    body: JSON.stringify(value),
  };
  return fetch(`${API_URL}/note/create_note/${status}/`, requestOptions).then(handleResponse);
};

export const updateNote = (id, status, value) => {
  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getLSUserToken()}`,
    },
    body: JSON.stringify(value),
  };
  return fetch(`${API_URL}/note/update_note/${id}/${status}/`, requestOptions).then(handleResponse);
};

export const deleteNote = (id) => {
  const requestOptions = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getLSUserToken()}`,
    },
  };
  return fetch(`${API_URL}/note/delete_note/${id}/`, requestOptions).then(handleResponse);
};

export const inProgressNote = (search) => {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getLSUserToken()}`,
    },
  };
  return fetch(`${API_URL}/note/in_progress_note/?search=${search}`, requestOptions).then(handleResponse);
};

export const publishedNote = (search) => {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getLSUserToken()}`,
    },
  };
  return fetch(`${API_URL}/note/published_note/?search=${search}`, requestOptions).then(handleResponse);
};
