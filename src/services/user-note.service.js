import { API_URL } from "../setting";
import { makeApiRequest, makeAuthApiRequest } from "../utils/api";

export const fetchNote = (id) => makeApiRequest(`${API_URL}/note/get_note/${id}/`, "GET");
export const fetchOwnerNote = (id) => makeAuthApiRequest(`${API_URL}/note/get_auth_note/${id}/`, "GET");

export const createNote = (status, value) => makeAuthApiRequest(`${API_URL}/note/create_note/${status}/`, "POST", value);
export const updateNote = (id, status, value) => makeAuthApiRequest(`${API_URL}/note/update_note/${id}/${status}/`, "PUT", value);
export const deleteNote = (id) => makeAuthApiRequest(`${API_URL}/note/delete_note/${id}/`, "DELETE");

export const inProgressNote = (search) => makeAuthApiRequest(`${API_URL}/note/in_progress_note/?search=${search}`, "GET");
export const publishedNote = (search) => makeAuthApiRequest(`${API_URL}/note/published_note/?search=${search}`, "GET");

export const userDownloadNote = (value) => makeAuthApiRequest(`${API_URL}/note/download_note/`, "POST", value);

export const buyerRequest = (search) => makeAuthApiRequest(`${API_URL}/note/buyer_request/?search=${search}`, "GET");
export const allowDownloadNote = (value) => makeAuthApiRequest(`${API_URL}/note/buyer_request/`, "PUT", value);

export const myDownloadNote = (search) => makeAuthApiRequest(`${API_URL}/note/my_download_note/?search=${search}`, "GET");
export const mySoldNote = (search) => makeAuthApiRequest(`${API_URL}/note/my_sold_note/?search=${search}`, "GET");
export const myRejectedNote = (search) => makeAuthApiRequest(`${API_URL}/note/rejected_note/?search=${search}`, "GET");

export const addReview = (value) => makeAuthApiRequest(`${API_URL}/user/add_review/`, "POST", value);

export const cloneNote = (value) => makeAuthApiRequest(`${API_URL}/note/clone_note/`, "POST", value);

export const fetchReview = (id) => makeApiRequest(`${API_URL}/user/get_review/${id}/`, "GET");
export const deleteReview = (id) => makeAuthApiRequest(`${API_URL}/user/delete_review/${id}/`, "DELETE");
