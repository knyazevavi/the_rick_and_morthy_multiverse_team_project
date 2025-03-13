import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { historyInitialState } from "../shared/constants/constants";
import { STORE_KEYS } from "../shared/constants/constants";
import { Character, HistoryState } from "../shared/types/types";

const historySlice = createSlice({
  name: "searchHistory",
  initialState: historyInitialState,
  reducers: {
    addSearchItem: (
      state: HistoryState,
      action: PayloadAction<{
        newValue: Character;
        username: string | undefined;
      }>,
    ) => {
      const { newValue, username } = action.payload;
      if (username) {
        state.history.map((character, i) => {
          if (character.id === newValue.id) {
            state.history.splice(i, 1);
          }
        });
        const newHistory = new Set([newValue, ...state.history]);
        state.history = Array.from(newHistory).slice(0, 10);
        localStorage.setItem(
          `${username}-${STORE_KEYS.HISTORY}`,
          JSON.stringify(state.history),
        );
      }
    },
    addUserHistoryList: (
      state: HistoryState,
      action: PayloadAction<string | undefined>,
    ) => {
      if (action.payload)
        state.history = JSON.parse(
          localStorage.getItem(`${action.payload}-${STORE_KEYS.HISTORY}`) ||
            "[]",
        );
    },
  },
});

export const { addSearchItem, addUserHistoryList } = historySlice.actions;
export default historySlice.reducer;
