import { configureStore } from "@reduxjs/toolkit";
import coinReducer from "./slices/CoinsSlice";

export const Store = configureStore({
  reducer: { coinReducer },
});
