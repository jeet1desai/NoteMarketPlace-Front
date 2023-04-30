import { toast } from "react-toastify";

export const handleResponse = (response) => {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        localStorage.clear();
        window.location.reload(true);
      }
      const error = (data && data.message) || response.statusText;
      toast.error(error);
      return Promise.reject(error);
    }
    return data;
  });
};
