import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BACK_END_URL,
  withCredentials: true,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const { response } = error;
    const errorMessage = response?.data?.message || "Something went wrong";
    return Promise.reject(errorMessage);
  },
);
export default axiosInstance;
