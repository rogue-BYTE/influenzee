import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Define the initial state
const initialState = {
  content: [], // Array to store fetched content
  loading: false, // Loading state
  error: null, // Error message
  page: 1, // Current page number
  totalPages: 1, // Total number of pages
};

// Define the base URL for the API
const API_URL = "https://api.example.com/content"; // Replace with your API endpoint

// Create an async thunk to fetch content
export const fetchContent = createAsyncThunk(
  "content/fetchContent",
  async (page, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}?page=${page}`);
      return response.data; // Assuming the API returns { content: [], totalPages: number }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Create the content slice
const contentSlice = createSlice({
  name: "content",
  initialState,
  reducers: {
    // Reducer to update the current page
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // Handle pending state
      .addCase(fetchContent.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      // Handle fulfilled state
      .addCase(fetchContent.fulfilled, (state, action) => {
        state.loading = false;
        state.content = action.payload.content; // Update content array
        state.totalPages = action.payload.totalPages; // Update total pages
      })
      // Handle rejected state
      .addCase(fetchContent.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Set error message
      });
  },
});

// Export actions
export const { setPage } = contentSlice.actions;

// Export the reducer
export default contentSlice.reducer;