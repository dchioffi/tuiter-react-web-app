import { createSlice } from "@reduxjs/toolkit";
import { logoutThunk, profileThunk, updateUserThunk, registerThunk } from "../services/auth-thunks"; // Importing the thunks

// Define the initial state
const initialState = {
  currentUser: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: {
    [logoutThunk.fulfilled]: (state) => {
      state.currentUser = null;
    },
    [profileThunk.fulfilled]: (state, { payload }) => {
      state.currentUser = payload;
    },
    [profileThunk.rejected]: (state, { payload }) => {
      state.currentUser = null;
    },
    [profileThunk.pending]: (state, action) => {
      state.currentUser = null;
    },
    [updateUserThunk.fulfilled]: (state, { payload }) => {
      state.currentUser = payload;
    },
    // Implementing the registration reducer
    [registerThunk.fulfilled]: (state, { payload }) => {
      state.currentUser = payload; // Assuming the registration service returns the user data
    },
  },
});

export default authSlice.reducer; // Corrected the export to match the slice name
