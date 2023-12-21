import { API_URL } from "../setting";
import { makeAuthApiRequest } from "../utils/api";

export const fetchProfile = (id) => makeAuthApiRequest(`${API_URL}/user/profile/${id}/`, "GET");
export const updateUserProfile = (value) => makeAuthApiRequest(`${API_URL}/user/update_user/`, "PUT", value);
export const updateAdminProfile = (value) => makeAuthApiRequest(`${API_URL}/user/update_admin/`, "PUT", value);

export const fetchMembers = (search) => makeAuthApiRequest(`${API_URL}/admin/members/?search=${search}`, "GET");
export const deActiveMembers = (id) => makeAuthApiRequest(`${API_URL}/admin/members/${id}/`, "DELETE");

export const fetchSeller = () => makeAuthApiRequest(`${API_URL}/user/sellers/`, "GET");
export const fetchBuyer = () => makeAuthApiRequest(`${API_URL}/user/buyers/`, "GET");
