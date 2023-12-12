import { API_URL } from "../setting";
import { getLSUserToken } from "../utils/local";
import { handleResponse } from "../utils/response";

export const createNote = (status, value) => {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getLSUserToken()}`,
    },
    body: JSON.stringify(value)
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
    body: JSON.stringify(value)
  };
  return fetch(`${API_URL}/update_note/${id}/${status}/`, requestOptions).then(handleResponse);
};