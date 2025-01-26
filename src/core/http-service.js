import axios from "axios";
import { getCookie } from "../shared/cookie";

const baseURL = "http://localhost:3000/";

export const httpService = axios.create({
  baseURL,
});

httpService.interceptors.request.use((request) => {
  const accessToken = getCookie("accessToken");
  if (accessToken) {
    request.headers["Authorization"] = `bearer ${accessToken}`;
  }

  return request;
});
