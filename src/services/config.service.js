import { API_URL } from "../setting";
import { makeApiRequest } from "../utils/api";

export const fetchUserCountryList = () => makeApiRequest(`${API_URL}/user/country_list/`, "GET");
export const fetchUserCategoryList = () => makeApiRequest(`${API_URL}/user/category_list/`, "GET");
export const fetchUserNoteTypeList = () => makeApiRequest(`${API_URL}/user/type_list/`, "GET");

export const fetchAdminConfig = () => makeApiRequest(`${API_URL}/super_admin/config_get/`, "GET");
export const updateAdminConfig = (value) => makeApiRequest(`${API_URL}/super_admin/config_post/`, "POST", value);

export const createAdmin = (value) => makeApiRequest(`${API_URL}/super_admin/admin_post/`, "POST", value);
export const updateAdmin = (id, value) => makeApiRequest(`${API_URL}/super_admin/admin_put/${id}/`, "PUT", value);
export const deleteAdmin = (id) => makeApiRequest(`${API_URL}/super_admin/admin_delete/${id}/`, "DELETE");
export const fetchAdmin = (id) => makeApiRequest(`${API_URL}/super_admin/admin/${id}/`, "GET");
export const fetchAllAdmin = (search) => makeApiRequest(`${API_URL}/super_admin/admins/?search=${search}`, "GET");

export const createCategory = (value) => makeApiRequest(`${API_URL}/super_admin/category_post/`, "POST", value);
export const updateCategory = (id, value) => makeApiRequest(`${API_URL}/super_admin/category_put/${id}/`, "PUT", value);
export const deleteCategory = (id) => makeApiRequest(`${API_URL}/super_admin/category_delete/${id}/`, "DELETE");
export const fetchCategory = (id) => makeApiRequest(`${API_URL}/super_admin/category/${id}/`, "GET");
export const fetchAllCategory = (search) => makeApiRequest(`${API_URL}/super_admin/categories/?search=${search}`, "GET");
