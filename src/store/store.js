import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../store/slices/sample.slice.js";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;