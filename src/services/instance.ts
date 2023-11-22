import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

import { getLocalStorage } from 'utils/localstorage';

export const baseURL =
  process.env.REACT_APP_BACK_URL ?? 'http://localhost:4000';

export const api: AxiosInstance = axios.create({
  baseURL,
  withCredentials: false
});

api.interceptors.request.use((config) => {
  const token = getLocalStorage('token');
  config.headers['Authorization'] = `Bearer ${token}`;

  return config;
});

api.interceptors.response.use(
  (response) => response,
  async (error: { response: AxiosResponse; config: AxiosRequestConfig }) => {
    if (error.response?.status === 401) {
      document.location.href = '/login';
    }

    return Promise.reject(error);
  }
);
