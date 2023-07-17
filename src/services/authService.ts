import axios from "./axios";
import { LoginDataTypes, RegisterDataTypes } from "./types";

export const verifyUserEmail = (url: string) => {
  return axios.get(url).then((response) => console.log(response));
};

export const registerUser = (data: RegisterDataTypes) => {
  return axios.get("/sanctum/csrf-cookie").then((response) => {
    axios.post("/api/register", data);
  });
};

export const loginUser = (data: LoginDataTypes) => {
  return axios.get("/sanctum/csrf-cookie").then((response) => {
    axios.post("/api/login", data);
  });
};

export const forgotPassword = (data: any) => {
  return axios.get("/sanctum/csrf-cookie").then((response) => {
    axios.post("/api/forgot-password", data);
  });
};
