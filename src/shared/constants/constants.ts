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

export const PATH = {
  signin: "signin",
  signup: "signup",
  favorites: "favorites",
  history: "history",
  search: "search",
  character: "character",
  home: "/",
} as const;

export const EMAIL = "email";
export const PASSWORD = "password";
export const USERNAME = "username";
