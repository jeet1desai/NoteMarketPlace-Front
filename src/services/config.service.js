import { API_URL } from "../setting";
import { getLSUserToken } from "../utils/local";
import { handleResponse } from "../utils/response";

export const fetchCountryList = () => {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getLSUserToken()}`,
    },
  };
  return fetch(`${API_URL}/user/country_list`, requestOptions).then(handleResponse);
};
