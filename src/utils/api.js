import { getLSUserToken } from "./local";
import { handleResponse } from "./response";

export const makeApiRequest = (PATH_URL, method, value) => {
  const requestOptions = {
    method: method,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getLSUserToken()}`,
    },
    body: value && JSON.stringify(value),
  };
  return fetch(PATH_URL, requestOptions).then(handleResponse);
};
