import axios from "axios";
import { getCookie } from "../shared/cookie";

const baseURL = import.meta.env.VITE_BASE_URL;

export const httpService = axios.create({
  baseURL,
});

export const httpInterceptedService = axios.create({
  baseURL,
});

httpInterceptedService.interceptors.request.use(
  (request) => {
    const accessToken = getCookie("accessToken");
    if (accessToken) {
      request.headers["Authorization"] = `bearer ${accessToken}`;
    }

    return request;
  },
  (error) => Promise.reject(error),
);

httpInterceptedService.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      window.location.href = "/login";
    }
    return Promise.reject(error);
  },
);
