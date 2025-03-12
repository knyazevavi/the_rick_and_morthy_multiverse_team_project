import { HistoryState, UserState, FavoriteState } from "../types/types";
import { LazyModuleProps } from "../types/types";

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

export const shareTelegramLink = `https://telegram.me/share/url?url=${encodeURIComponent("https://google.com")}&text=${encodeURIComponent("this just link")}`;

export const favoriteInitialState: FavoriteState = {
  favorites: JSON.parse(localStorage.getItem(STORE_KEYS.FAVORITES) || "[]"),
};

export const PATH = {
  signin: "signin",
  signup: "signup",
  admin: "admin",
  favorites: "favorites",
  history: "history",
  search: "search",
  character: "/character",
  home: "/",
  page404: "*",
  dimensions: "#",
  episodes: "#",
} as const;

export const USER_ENTITIES = {
  email: "email",
  username: "username",
  password: "password",
} as const;

export const LAZY_MODULES: Record<string, LazyModuleProps> = {
  CharacterPage: {
    path: "./../pages/CharacterPage",
    exportName: "CharacterPage",
  },
};

export const ERROR_404_URL = "./../../pages/404.tsx";
