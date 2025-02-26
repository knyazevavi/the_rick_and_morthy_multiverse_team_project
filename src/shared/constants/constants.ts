import { HistoryState, UserState, FavoriteState } from "../types/types";

export const STORE_KEYS = {
  FAVORITES: "favorites",
  HISTORY: "searchHistory",
  USER: "user",
};

export const historyInitialState: HistoryState = {
  history: [],
};

export const userInitialState: UserState = {
  username: "",
  isAuthenticated: false,
};

export const favoriteInitialState: FavoriteState = {
  favorites: JSON.parse(localStorage.getItem(STORE_KEYS.FAVORITES) || "[]"),
};
