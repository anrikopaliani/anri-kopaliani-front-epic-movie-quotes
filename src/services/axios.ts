import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000",
  withCredentials: true,
  headers: {
    "X-Requested-With": "XMLHttpRequest",
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default api;
