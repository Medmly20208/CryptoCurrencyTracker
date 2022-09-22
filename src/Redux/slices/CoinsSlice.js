import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiClient from "../../helpers/apiClient";

const coinsDataSlice = createSlice({
  name: "CoinReducers",
  initialState: {
    isLoading: false,
    CoinsList: [],
    error: null,
  },
  reducers: {
    startLoading(state) {
      state.isLoading = true;
    },
    endLoading(state) {
      state.isLoading = false;
    },

    // HAS ERROR
    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    getCoins(state) {
      console.log(state);
    },
  },
});

export const CoinsAction = coinsDataSlice.actions;

export default coinsDataSlice.reducer;


