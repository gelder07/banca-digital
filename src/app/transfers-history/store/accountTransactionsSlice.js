import { getAccountTransactionsById } from "@/services/api/accounts/accountServices";
import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getAccountTransactions = createAsyncThunk(
  "accountTransactionsSlice/getAccountTransactions",
  async (payload) => {
    const response = await getAccountTransactionsById(payload);
    const data = await response.data;
    return data;
  }
);

export const resetUser = createAction("accountTransactionsSlice/resetUser");

const initialState = {
  accountData: {
    data: [],
    loading: "",
    currentRequestId: undefined,
    error: null,
  },
};

export const accountTransactionsSlice = createSlice({
  name: "accountTransactionsSlice",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAccountTransactions.pending, (state, action) => {
        if (state.accountData.loading === "") {
          state.accountData.loading = "pending";
          state.accountData.currentRequestId = action.meta.requestId;
        }
      })
      .addCase(getAccountTransactions.fulfilled, (state, action) => {
        const { requestId } = action.meta;

        if (
          state.accountData.loading === "pending" &&
          state.accountData.currentRequestId === requestId
        ) {
          state.accountData.loading = "loaded";
          state.accountData.data = action.payload;
          state.accountData.currentRequestId = undefined;
        }
      })
      .addCase(getAccountTransactions.rejected, (state, action) => {
        const { requestId } = action.meta;
        if (
          state.accountData.loading === "pending" &&
          state.accountData.currentRequestId === requestId
        ) {
          state.accountData.loading = "";
          state.accountData.error = action.error;
          state.accountData.currentRequestId = undefined;
        }
      })

      .addCase(resetUser, (state, action) => {
        state.accountData = {
          data: [],
          loading: "",
          currentRequestId: undefined,
          error: null,
        };
      });
  },
});

export const selectAccountHistory = (state) =>
  state.accountTransactionsSlice.accountData;
