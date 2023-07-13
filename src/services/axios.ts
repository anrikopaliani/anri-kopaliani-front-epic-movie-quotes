import Axios from "axios";

const axios = Axios.create({
  baseURL: "http://localhost:8000/api",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export const csrfToken = async () => {
  await axios.get("http://localhost:8000/sanctum/csrf-cookie");
  return true;
};

export default axios;
