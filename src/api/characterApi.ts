import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Character } from "../shared/types/types";
import { API } from "../shared/constants/api";

export const characterApi = createApi({
  reducerPath: "characterApi",
  baseQuery: fetchBaseQuery({ baseUrl: API.BASE_URL }),
  endpoints: (builder) => ({
    getCharacters: builder.query<
      { results: Character[] },
      { filter?: string; page: number }
    >({
      query: ({ page = 1, filter }) =>
        `${API.CHARACTER}/?name=${filter}&page=${page}`,
    }),
    getCharacterById: builder.query<Character, string>({
      query: (id) => `${API.CHARACTER}/${id}`,
    }),
  }),
});

export const {
  useGetCharactersQuery,
  useGetCharacterByIdQuery,
  useLazyGetCharactersQuery,
} = characterApi;
