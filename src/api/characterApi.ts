import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API } from "../shared/constants/api";
import { Character } from "../shared/types/types";
import { InfoQueryType } from "../shared/types/types";

export const characterApi = createApi({
  reducerPath: "characterApi",
  baseQuery: fetchBaseQuery({ baseUrl: API.BASE_URL }),
  tagTypes: ["Characters"],
  endpoints: (builder) => ({
    getCharacters: builder.query<
      { results: Character[]; info: InfoQueryType },
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
