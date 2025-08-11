import { useAppDispatch } from "@/store/hooks";
import { getAccountTransactions } from "../store/accountTransactionsSlice";
import { useEffect } from "react";

export const useTransfersHistory = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    cargarListaHistorial();
  }, []);

  const cargarListaHistorial = (data) => {
    dispatch(getAccountTransactions(13));
  };

  return {
    cargarListaHistorial,
  };
};
