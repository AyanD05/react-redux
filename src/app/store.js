import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import loggerMiddleware from "./loggerMiddleware";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loggerMiddleware),
});