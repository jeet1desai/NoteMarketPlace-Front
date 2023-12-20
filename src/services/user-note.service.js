import { API_URL } from "../setting";
import { makeApiRequest } from "../utils/api";

export const fetchNote = (id) => makeApiRequest(`${API_URL}/note/get_note/${id}/`, "GET");
export const createNote = (status, value) => makeApiRequest(`${API_URL}/note/create_note/${status}/`, "POST", value);
export const updateNote = (id, status, value) => makeApiRequest(`${API_URL}/note/update_note/${id}/${status}/`, "PUT", value);
export const deleteNote = (id) => makeApiRequest(`${API_URL}/note/delete_note/${id}/`, "DELETE");

export const inProgressNote = (search) => makeApiRequest(`${API_URL}/note/in_progress_note/?search=${search}`, "GET");
export const publishedNote = (search) => makeApiRequest(`${API_URL}/note/published_note/?search=${search}`, "GET");

export const userDownloadNote = (value) => makeApiRequest(`${API_URL}/note/download_note/`, "POST", value);

export const buyerRequest = (search) => makeApiRequest(`${API_URL}/note/buyer_request/?search=${search}`, "GET");
export const allowDownloadNote = (value) => makeApiRequest(`${API_URL}/note/buyer_request/`, "PUT", value);
