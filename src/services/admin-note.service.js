import { API_URL } from "../setting";
import { makeAuthApiRequest } from "../utils/api";

export const fetchUserNotes = (id) => makeAuthApiRequest(`${API_URL}/admin/user_notes/${id}`, "GET");

export const fetchDashboardStat = () => makeAuthApiRequest(`${API_URL}/admin/get_stats/`, "GET");

export const fetchUnderReviewNotes = (search, seller) =>
  makeAuthApiRequest(`${API_URL}/admin/note_under_review/?search=${search}&seller=${seller}`, "GET");
export const fetchPublishedNotes = (search, seller, months) =>
  makeAuthApiRequest(`${API_URL}/admin/published_note/?search=${search}&seller=${seller}&months=${months}`, "GET");
export const fetchDownloadedNotes = (search, seller, buyer) =>
  makeAuthApiRequest(`${API_URL}/admin/downloaded_note/?search=${search}&seller=${seller}&buyer=${buyer}`, "GET");
export const fetchRejectedNotes = (search, seller) =>
  makeAuthApiRequest(`${API_URL}/admin/rejected_note/?search=${search}&seller=${seller}`, "GET");

export const changeNoteStatus = (value) => makeAuthApiRequest(`${API_URL}/admin/update_status/`, "PUT", value);
export const changeNoteStatusRemark = (value) => makeAuthApiRequest(`${API_URL}/admin/update_remark_status/`, "PUT", value);

export const fetchSpamReports = (search) => makeAuthApiRequest(`${API_URL}/admin/get_spams/?search=${search}`, "GET");
export const deleteSpamReport = (id) => makeAuthApiRequest(`${API_URL}/admin/delete_spam/${id}`, "DELETE");
