import axios from "axios"
import { getToken } from "../auth/index"


export const BASE_URL = "https://backend-for-blogging-app-production.up.railway.app/api/v1";

export const myAxios = axios.create({
  baseURL: BASE_URL,
})

export const privateAxios = axios.create({
  baseURL: BASE_URL,
});

privateAxios.interceptors.request.use(
  (config) => {
    const token = getToken()
    // console.log(token);

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);