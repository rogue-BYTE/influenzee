import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Define the initial state
const initialState = {
  user: null, // Stores the authenticated user's data
  loading: false, // Indicates if an auth request is in progress
  error: null, // Stores any error messages
  isAuthenticated: false, // Indicates if the user is authenticated
};

// Define the base URL for the authentication API
const API_URL = "https://api.example.com/auth"; // Replace with your API endpoint

// Async thunk for user login
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_URL}/login`, { email, password });
      return response.data; // Assuming the API returns user data and a token
    } catch (error) {
      return rejectWithValue(error.response.data.message || "Login failed");
    }
  }
);

// Async thunk for user sign-up
export const signUpUser = createAsyncThunk(
  "auth/signUpUser",
  async ({ email, fullName, password }, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_URL}/signup`, {
        email,
        fullName,
        password,
      });
      return response.data; // Assuming the API returns user data and a token
    } catch (error) {
      return rejectWithValue(error.response.data.message || "Sign-up failed");
    }
  }
);

// Create the auth slice
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // Reducer to log out the user
    logoutUser: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.error = null;
    },
    // Reducer to clear errors
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Handle pending state for login and sign-up
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signUpUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      // Handle fulfilled state for login
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user; // Store user data
        state.isAuthenticated = true; // Set authenticated to true
      })
      // Handle fulfilled state for sign-up
      .addCase(signUpUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user; // Store user data
        state.isAuthenticated = true; // Set authenticated to true
      })
      // Handle rejected state for login and sign-up
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Set error message
      })
      .addCase(signUpUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Set error message
      });
  },
});

// Export actions
export const { logoutUser, clearError } = authSlice.actions;

// Export the reducer
export default authSlice.reducer;