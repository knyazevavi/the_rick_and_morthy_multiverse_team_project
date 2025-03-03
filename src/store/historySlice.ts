import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { historyInitialState } from "../shared/constants/constants";
import { STORE_KEYS } from "../shared/constants/constants";

const historySlice = createSlice({
  name: "searchHistory",
  initialState: historyInitialState,
  reducers: {
    addSearchItem: (state, action: PayloadAction<string>) => {
      const newHistory = new Set([action.payload, ...state.history]);
      state.history = Array.from(newHistory).slice(0, 10);
      localStorage.setItem(STORE_KEYS.HISTORY, JSON.stringify(state.history));
    },
  },
});

export const { addSearchItem } = historySlice.actions;
export default historySlice.reducer;
