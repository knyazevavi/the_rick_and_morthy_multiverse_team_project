import { RootState } from "../store.ts";

export const selectUser = (state: RootState) => state.user;

export const selectFavorites = (state: RootState) => state.favorites.favorites;
