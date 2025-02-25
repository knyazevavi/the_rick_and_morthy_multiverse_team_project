export interface HistoryState {
  history: string[];
}

export interface UserState {
  username?: string;
  isAuthenticated: boolean;
}

export type userRegistrationPayload = Omit<UserState, "isAuthenticated"> & {
  password: string;
  username: string;
};

export interface FavoriteState {
  favorites: number[];
}

export interface Character {
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
}

export interface LoginFormData {
  email: string;
  password: string;
}

export interface RegistrationFormData extends LoginFormData {
  username: string;
}
