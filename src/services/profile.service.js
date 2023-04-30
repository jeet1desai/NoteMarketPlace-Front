import { API_URL } from "../setting";
import { getLSUserToken } from "../utils/local";
import { handleResponse } from "../utils/response";

export const fetchProfile = () => {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      auth_token: getLSUserToken(),
    },
  };
  return fetch(`${API_URL}/auth/user-details`, requestOptions).then(
    handleResponse
  );
};
