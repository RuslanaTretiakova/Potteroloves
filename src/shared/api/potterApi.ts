import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const potterApi = createApi({
  reducerPath: 'potterApi',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_BASE_URL }),
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => '/en/books',
    }),
    getCharacters: builder.query({
      query: () => '/en/characters',
    }),
    getHouses: builder.query({
      query: () => '/en/houses',
    }),
    getSpells: builder.query({
      query: () => '/en/spells',
    }),
  }),
});

export const {
  useGetBooksQuery,
  useGetCharactersQuery,
  useGetHousesQuery,
  useGetSpellsQuery,
} = potterApi;
