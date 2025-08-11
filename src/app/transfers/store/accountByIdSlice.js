import { getAccount } from "@/services/api/accounts/accountServices";
import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getAccountById = createAsyncThunk(
  "accountByIdSlice/getAccountById",
  async (payload) => {
    const response = await getAccount(payload);
    const data = await response.data;
    return data;
  }
);

export const resetUser = createAction("accountByIdSlice/resetUser");

const initialState = {
  accountData: {
    data: [],
    loading: "",
    currentRequestId: undefined,
    error: null,
  },
};

export const accountByIdSlice = createSlice({
  name: "accountByIdSlice",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAccountById.pending, (state, action) => {
        if (state.accountData.loading === "") {
          state.accountData.loading = "pending";
          state.accountData.currentRequestId = action.meta.requestId;
        }
      })
      .addCase(getAccountById.fulfilled, (state, action) => {
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
      .addCase(getAccountById.rejected, (state, action) => {
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

export const selectUser = (state) => state.accountByIdSlice.accountData;
