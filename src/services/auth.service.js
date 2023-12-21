import { API_URL } from "../setting";
import { makeApiRequest, makeAuthApiRequest } from "../utils/api";

export const signIn = (user) => makeApiRequest(`${API_URL}/auth/login/`, "POST", user);
export const signUp = (user) => makeApiRequest(`${API_URL}/auth/register/`, "POST", user);
export const verifyEmail = (id) => makeApiRequest(`${API_URL}/auth/verify_email/${id}/`, "GET");
export const forgetPassword = (user) => makeApiRequest(`${API_URL}/auth/reset_password/`, "POST", user);
export const changePassword = (value) => makeAuthApiRequest(`${API_URL}/auth/change_password/`, "POST", value);

export const contactUs = (query) => makeApiRequest(`${API_URL}/user/contact_us/`, "POST", query);
