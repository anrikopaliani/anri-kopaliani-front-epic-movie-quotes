import axios from "./axios";

export const verifyUserEmail = (url: string) => {
  return axios.get(url).then((response) => console.log(response));
};
