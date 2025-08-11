import axiosInstance from "../axiosConfig";

export const createTransactions = (payload) =>
  axiosInstance.post(`/transactions`, payload);
