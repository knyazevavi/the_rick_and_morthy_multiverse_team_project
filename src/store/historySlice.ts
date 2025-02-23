import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { historyInitialState } from "../shared/constants/constants";

const historySlice = createSlice({
  name: "searchHistory",
  initialState: historyInitialState,
  reducers: {
    addSearchItem: (state, action: PayloadAction<string>) => {
      state.history.unshift(action.payload);
      if (state.history.length > 10) {
        state.history.pop();
      }
      localStorage.setItem("searchHistory", JSON.stringify(state.history));
    },
  },
});

export const { addSearchItem } = historySlice.actions;
export default historySlice.reducer;
