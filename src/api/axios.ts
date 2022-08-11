import axios from "axios";
import { authService } from "../services/authService";
import { apiUrl } from "./urls";

const axiosInstance = axios.create({ baseURL: "http://localhost:9000/api/" });

axiosInstance.interceptors.request.use((config: any) => {
   const accessToken = localStorage.getItem("access");
   config.headers.Authorization = `Bearer ${accessToken}`;

   return config;
});

axiosInstance.interceptors.response.use(
   ({ data }) => {
      return data;
   },
   async (error: any) => {
      const originalRequest = error.config;

      if (error.response.status === 401 && error.config) {
         try {
            const tokens = (
               await axiosInstance.post("/auth/refresh", {
                  refresh: localStorage.getItem("refresh"),
               })
            ).data;
            localStorage.setItem("access", tokens.access);
            localStorage.setItem("refresh", tokens.refresh);

            return axiosInstance.request(originalRequest);
         } catch (e) {
            console.log("НЕ авторизован");
            authService.inputs.handleLogout();
         }
      }
      throw error;
   }
);

export { axiosInstance as axios };
