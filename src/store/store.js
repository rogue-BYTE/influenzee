import { configureStore } from "@reduxjs/toolkit";
import contentReducer from "./slices/content.slice.js";
import authReducer from "./slices/auth.slice.js";

export const store = configureStore({
  reducer: {
    content: contentReducer,
    auth: authReducer,
  },
});

export default store;