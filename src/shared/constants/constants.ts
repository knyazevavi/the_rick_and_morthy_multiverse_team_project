import {
  HistoryState,
  UserState,
  FavoriteState,
  uploadFavoritesState,
} from "../types/types";
import { LazyModuleProps } from "../types/types";

export const STORE_KEYS = {
  FAVORITES: "favorites",
  HISTORY: "searchHistory",
  USER: "user",
};

export const historyInitialState: HistoryState = {
  history: [],
  username: "",
};

export const userInitialState: UserState = {
  username: "",
  isAuthenticated: false,
};

export const shareTelegramLink = `https://telegram.me/share/url?url=${encodeURIComponent("https://google.com")}&text=${encodeURIComponent("this just link")}`;

export const favoriteInitialState: FavoriteState = {
  favorites: [],
  username: "",
};

export const uploadFavoritesInitialState: uploadFavoritesState = {
  characters: [],
  item: 0,
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
  History: {
    path: "./../pages/History",
    exportName: "History",
  },
  Favorites: {
    path: "./../pages/Favorites",
    exportName: "Favorites",
  },
};

export const ERROR_404_URL = "./../../pages/404.tsx";
