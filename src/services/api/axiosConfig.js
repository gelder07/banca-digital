import axios from "axios";

const baseURL = "http://localhost:5566";

const axiosInstance = axios.create({
  baseURL,
});

export default axiosInstance;
