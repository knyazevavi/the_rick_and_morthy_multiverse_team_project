import { HistoryState, UserState, FavoriteState } from "../types/types";

export const historyInitialState: HistoryState = {
  history: [],
};

export const userInitialState: UserState = {
  username: null,
  isAuthenticated: false,
};

export const shareTelegramLink = `https://telegram.me/share/url?url=${encodeURIComponent("https://google.com")}&text=${encodeURIComponent("this just link")}`;

export const favoriteInitialState: FavoriteState = {
  favorites: JSON.parse(localStorage.getItem("favorites") || "[]"),
};
