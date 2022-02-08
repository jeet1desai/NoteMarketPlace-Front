import { toast } from "react-toastify";

import { API_URL } from "../setting";
import { getLSUserToken } from "../utils/local";

export const fetchCategories = () => {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json", token: getLSUserToken() },
  };
  return fetch(`${API_URL}/admin/category/all`, requestOptions).then(handleResponse);
};

export const logout = () => {
  localStorage.removeItem("currentUser");
};


const handleResponse = (response) => {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        logout();
        window.location.reload(true);
      }
      const error = (data && data.message) || response.statusText;
      toast.error(error);
      return Promise.reject(error);
    }
    return data;
  });
};
