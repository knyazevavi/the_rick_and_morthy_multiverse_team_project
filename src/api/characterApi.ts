import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Character } from "../shared/types/types";

export const characterApi = createApi({
  reducerPath: "characterApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://rickandmortyapi.com/api" }),
  endpoints: (builder) => ({
    getCharacters: builder.query<{ results: Character[] }, number>({
      query: (page = 1) => `/character/?page=${page}`,
    }),
    getCharacterById: builder.query<Character, string>({
      query: (id) => `/character/${id}`,
    }),
  }),
});

export const { useGetCharactersQuery, useGetCharacterByIdQuery } = characterApi;
