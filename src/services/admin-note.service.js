import { API_URL } from "../setting";
import { makeApiRequest } from "../utils/api";

export const fetchUserNotes = (id) => makeApiRequest(`${API_URL}/admin/user_notes/${id}`, "GET");
