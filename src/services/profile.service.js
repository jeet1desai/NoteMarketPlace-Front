import { API_URL } from "../setting";
import { makeApiRequest } from "../utils/api";

export const fetchProfile = (id) => makeApiRequest(`${API_URL}/user/profile/${id}/`, "GET");
export const updateUserProfile = (value) => makeApiRequest(`${API_URL}/user/update_user/`, "PUT", value);
export const updateAdminProfile = (value) => makeApiRequest(`${API_URL}/user/update_admin/`, "PUT", value);

export const fetchMembers = (search) => makeApiRequest(`${API_URL}/admin/members/?search=${search}`, "GET");
export const deActiveMembers = (id) => makeApiRequest(`${API_URL}/admin/members/${id}/`, "DELETE");
