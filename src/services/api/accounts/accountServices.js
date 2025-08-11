import axiosInstance from "../axiosConfig";

export const getAccount = (accountId) =>
  axiosInstance.get(`/accounts/${accountId}`);

export const getAccountTransactionsById = (accountId) =>
  axiosInstance.get(`/accounts/${accountId}/transactions`);
