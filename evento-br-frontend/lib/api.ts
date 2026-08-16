import axios, { InternalAxiosRequestConfig } from 'axios';

export const api = axios.create({ baseURL: process.env.NEXT_PUBLIC_BASE_API_URL });

api.interceptors.request.use((request: InternalAxiosRequestConfig) => {
  const token = localStorage.getItem('token');
  if (token) request.headers.Authorization = `Bearer ${token}`;
  return request;
});
