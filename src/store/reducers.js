import { userSlice } from "@/app/auth/store/userSlice";
import { transactionsSlice } from "@/app/tablero/store/transactionsSlice";
import { accountTransactionsSlice } from "@/app/transfers-history/store/accountTransactionsSlice";
import { cargarCuentasDestinoSlices } from "@/app/transfers/store/cargarCuentasDestinoSlices";
import { combineSlices } from "@reduxjs/toolkit";

export const rootReducer = combineSlices(
  userSlice,
  cargarCuentasDestinoSlices,
  accountTransactionsSlice,
  transactionsSlice
).withLazyLoadedSlices();
