import { RootState } from "../store.ts";

export const selectFavorites = (state: RootState) => state.favorites;
export const selectUploadFavorites = (state: RootState) =>
  state.uploadFavorites;
