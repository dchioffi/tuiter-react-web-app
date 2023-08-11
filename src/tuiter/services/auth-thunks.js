import { createAsyncThunk } from "@reduxjs/toolkit";
import * as authService from "./auth-service";

export const profileThunk = createAsyncThunk(
  "auth/profile", async () => {
    const response = await authService.profile(); // Added await
    return response.data; // Access .data on the response
  }
);

export const logoutThunk = createAsyncThunk(
  "auth/logout", async () => {
    return await authService.logout();
  }
);

export const updateUserThunk = createAsyncThunk(
  "user/updateUser", async (user) => {
    await authService.updateUser(user);
    return user;
  }
);

export const registerThunk = createAsyncThunk(
  "user/register", async (credentials) => {
    const response = await authService.register(credentials);
    return response.data; // Assuming the registration service returns the user data
  }
);

export const loginThunk = createAsyncThunk(
    "user/login", async (credentials) => {
      const response = await authService.login(credentials);
      return response.data; // Assuming the login service returns the user data
    }
  );
