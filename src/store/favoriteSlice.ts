import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { favoriteInitialState } from "../shared/constants/constants";
import { STORE_KEYS } from "../shared/constants/constants";
import { FavoriteState } from "../shared/types/types";

const favoriteSlice = createSlice({
  name: "favorites",
  initialState: favoriteInitialState,
  reducers: {
    toggleFavorite: (
      state: FavoriteState,
      action: PayloadAction<{ id: number; username: string | undefined }>,
    ) => {
      const { id, username } = action.payload;
      if (state.favorites.includes(id)) {
        state.favorites = state.favorites.filter((idCh) => idCh !== id);
      } else {
        state.favorites.unshift(id);
      }
      localStorage.setItem(
        `${username}-${STORE_KEYS.FAVORITES}`,
        JSON.stringify(state.favorites),
      );
    },
    addUserFavoritesList: (
      state: FavoriteState,
      action: PayloadAction<string | undefined>,
    ) => {
      if (action.payload)
        state.favorites = JSON.parse(
          localStorage.getItem(`${action.payload}-${STORE_KEYS.FAVORITES}`) ||
            "[]",
        );
    },
  },
});

export const { toggleFavorite, addUserFavoritesList } = favoriteSlice.actions;
export default favoriteSlice.reducer;
