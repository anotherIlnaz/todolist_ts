import axios from "axios";
import { apiUrl } from "./urls";

const axiosInstance = axios.create({ baseURL: apiUrl });

export { axiosInstance as axios };
