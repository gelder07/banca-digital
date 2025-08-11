import { createAction, createSlice } from "@reduxjs/toolkit";
export const resetCargarCuentasDestinoSlices = createAction(
  "dataForms/resetCargarCuentasDestinoSlices"
);

const initialState = {
  dataCuentaDestino: [],
};

export const cargarCuentasDestinoSlices = createSlice({
  name: "cargarCuentasDestinoSlices",
  initialState,
  reducers: {
    updateDataCuentasDestino: (state, action) => {
      state.dataCuentaDestino = action.payload;
    },
  },
});

export const { updateDataCuentasDestino } = cargarCuentasDestinoSlices.actions;

export const selectDataCuentasDestino = (state) =>
  state?.cargarCuentasDestinoSlices.dataCuentaDestino;
