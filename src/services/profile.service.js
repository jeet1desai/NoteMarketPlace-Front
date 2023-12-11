import { API_URL } from "../setting";
import { getLSUserToken } from "../utils/local";
import { handleResponse } from "../utils/response";

export const fetchProfile = (id) => {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getLSUserToken()}`,
    },
  };
  return fetch(`${API_URL}/user/profile/${id}/`, requestOptions).then(
    handleResponse
  );
};

export const updateUserProfile = (value) => {
  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getLSUserToken()}`,
    },
    body: JSON.stringify(value),
  };
  return fetch(`${API_URL}/user/update_user/`, requestOptions).then(
    handleResponse
  );
};
