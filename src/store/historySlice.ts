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
        state.history.unshift(newValue);
        if (state.history.length > 10) {
          state.history.pop();
        }
        localStorage.setItem(
          `${username}-${STORE_KEYS.HISTORY}`,
          JSON.stringify(state.history),
        );
      }
    },
    addUserFavoritesList: (
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

export const { addSearchItem, addUserFavoritesList } = historySlice.actions;
export default historySlice.reducer;
