import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Character } from "../shared/types/types";
import { BASE_URL, CHARACTER_ENDPOINT } from "../shared/constants/api";

export const characterApi = createApi({
  reducerPath: "characterApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getCharacters: builder.query<{ results: Character[] }, number>({
      query: (page = 1) => `${CHARACTER_ENDPOINT}/?page=${page}`,
    }),
    getCharacterById: builder.query<Character, string>({
      query: (id) => `${CHARACTER_ENDPOINT}/${id}`,
    }),
  }),
});

export const { useGetCharactersQuery, useGetCharacterByIdQuery } = characterApi;
