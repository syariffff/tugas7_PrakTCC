// src/api/axiosInstance.js
import axios from "axios";

const instance = axios.create({
  baseURL: "https://notes-backend-syarif-995193249744.us-central1.run.app", // Ganti dengan base URL backend-mu
  withCredentials: true, // untuk kirim cookie kalau dibutuhkan
});

export default instance;
