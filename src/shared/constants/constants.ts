import { HistoryState, UserState, FavoriteState } from "../types/types";

export const historyInitialState: HistoryState = {
  history: [],
};

export const userInitialState: UserState = {
  username: null,
  isAuthenticated: false,
};

export const favoriteInitialState: FavoriteState = {
  favorites: JSON.parse(localStorage.getItem("favorites") || "[]"),
};
