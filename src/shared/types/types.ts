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
  email: string;
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

export type SearchProps = {
  onSearch: (name: string) => void;
};

export type CardProps = {
  character: Character;
};

export type CharactersListProps = {
  characters: Character[];
  setPage: (page: number) => void;
};

export type ErrorBoundaryState = {
  hasError: boolean;
  error: Error | unknown;
};

export type CharacterImageProps = {
  image: string;
  name: string;
};

export type CharacterStatusProps = {
  status: string;
  species: string;
};

export type CharacterInfoProps = {
  character: Character;
};

export type TInfoQuery = {
  count: number | null;
  next: string | null;
  pages: number | null;
  prev: string | null;
};

export type TPaginationButton = {
  setPage: (page: number) => void;
  pageNumber: number;
  totalPages: number;
};
