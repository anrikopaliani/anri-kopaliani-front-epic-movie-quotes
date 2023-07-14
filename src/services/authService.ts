import axios, { csrfToken } from "./axios";
import { LoginDataTypes, RegisterDataTypes } from "./types";

export const verifyUserEmail = (url: string) => {
  return axios.get(url).then((response) => console.log(response));
};

export const registerUser = async (data: RegisterDataTypes) => {
  await csrfToken();
  return await axios.post("/register", data);
};

export const loginUser = async (data: LoginDataTypes) => {
  await csrfToken();
  return await axios.post("/login", data);
};
