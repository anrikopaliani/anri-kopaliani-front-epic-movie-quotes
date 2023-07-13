import axios from "./axios";
import { RegisterDataTypes } from "./types";

export const verifyUserEmail = (url: string) => {
  return axios.get(url).then((response) => console.log(response));
};

export const registerUser = async (data: RegisterDataTypes) => {
  return await axios.post("/register", data);
};
