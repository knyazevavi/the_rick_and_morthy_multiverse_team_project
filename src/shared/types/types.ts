import { ReactNode } from "react";

export type HistoryState = {
  history: string[];
};

export type UserState = {
  username?: string;
  isAuthenticated: boolean;
};

export type userRegistrationPayload = Omit<UserState, "isAuthenticated"> & {
  password: string;
  username: string;
};

export type FavoriteState = {
  favorites: number[];
};

export type Character = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
};

export type LoginFormData = {
  email: string;
  password: string;
};

export type RegistrationFormData = {
  username: string;
} & LoginFormData;

export type FormWrapperProps = {
  children: ReactNode;
  name: string;
};

export type FeatureFlags = Record<string, boolean | undefined>;
