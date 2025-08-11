import axiosInstance from "../axiosConfig";

export const getUserById = (userId) => axiosInstance.get(`/users/${userId}`);
