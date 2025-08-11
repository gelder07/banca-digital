import { useAppDispatch } from "@/store/hooks";
import { getAccountTransactions } from "../store/transactionsSlice";
import { useEffect } from "react";

export const useTablero = () => {
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
