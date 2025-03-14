import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { uploadFavoritesInitialState } from "../shared/constants/constants";
import { Character, uploadFavoritesState } from "../shared/types/types";

const uploadFavoritesSlice = createSlice({
  name: "uploadFavorites",
  initialState: uploadFavoritesInitialState,
  reducers: {
    addUploadFavorites: (
      state: uploadFavoritesState,
      action: PayloadAction<Character[]>,
    ): void => {
      if (
        !state.characters[state.item] ||
        action.payload[0].id != state.characters[state.item].id
      )
        action.payload.map((character: Character) =>
          state.characters.push(character),
        );
    },
    changeStartItem: (
      state: uploadFavoritesState,
      action: PayloadAction<number>,
    ): void => {
      state.item = action.payload;
    },
    clearListUpload: (state: uploadFavoritesState): void => {
      state.characters = [];
      state.item = 0;
    },
  },
});

export const { addUploadFavorites, changeStartItem, clearListUpload } =
  uploadFavoritesSlice.actions;
export default uploadFavoritesSlice.reducer;
