import axios from "axios";

/* ================= BASE URL ================= */
export const BASE_URL = "http://localhost:5000/api";

/* ================= IMAGE URL ================= */
export const IMAGE_URL = "http://localhost:5000";

/* ================= AXIOS INSTANCE ================= */
const API = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default API;