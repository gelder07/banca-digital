import { getUserById } from "@/services/api/users/userServices";
import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getUser = createAsyncThunk(
  "userSlice/getUserById",
  async (payload) => {
    const response = await getUserById(payload);
    const data = await response.data;
    console.log("getUser response", data);
    return data;
  }
);

export const resetUser = createAction("userSlice/resetUser");

const initialState = {
  userData: {
    data: [],
    loading: "",
    currentRequestId: undefined,
    error: null,
  },
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getUser.pending, (state, action) => {
        if (state.userData.loading === "") {
          state.userData.loading = "pending";
          state.userData.currentRequestId = action.meta.requestId;
        }
      })
      .addCase(getUser.fulfilled, (state, action) => {
        const { requestId } = action.meta;

        if (
          state.userData.loading === "pending" &&
          state.userData.currentRequestId === requestId
        ) {
          state.userData.loading = "loaded";
          state.userData.data = action.payload;
          state.userData.currentRequestId = undefined;
        }
      })
      .addCase(getUser.rejected, (state, action) => {
        const { requestId } = action.meta;
        if (
          state.userData.loading === "pending" &&
          state.userData.currentRequestId === requestId
        ) {
          state.userData.loading = "";
          state.userData.error = action.error;
          state.userData.currentRequestId = undefined;
        }
      })

      .addCase(resetUser, (state, action) => {
        state.userData = {
          data: [],
          loading: "",
          currentRequestId: undefined,
          error: null,
        };
      });
  },
});

export const selectUser = (state) => state.userSlice.userData;
