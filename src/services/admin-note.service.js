import { API_URL } from "../setting";
import { makeAuthApiRequest } from "../utils/api";

export const fetchUserNotes = (id) => makeAuthApiRequest(`${API_URL}/admin/user_notes/${id}`, "GET");

export const fetchUnderReviewNotes = (search, seller) => makeAuthApiRequest(`${API_URL}/admin/note_under_review/?search=${search}`, "GET");
export const fetchPublishedNotes = (search, seller) => makeAuthApiRequest(`${API_URL}/admin/published_note/?search=${search}`, "GET");
export const fetchDownloadedNotes = (search, seller, buyer) => makeAuthApiRequest(`${API_URL}/admin/downloaded_note/?search=${search}`, "GET");
export const fetchRejectedNotes = (search, seller) => makeAuthApiRequest(`${API_URL}/admin/rejected_note/?search=${search}`, "GET");

export const changeNoteStatus = (value) => makeAuthApiRequest(`${API_URL}/admin/update_status/`, "PUT", value);
export const changeNoteStatusRemark = (value) => makeAuthApiRequest(`${API_URL}/admin/update_remark_status/`, "PUT", value);
