import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_URL = 'https://pokeapi.co/api/v2/';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getAllPokemons: builder.query({
      query: () => "pokemon",
    }),
    getPokemonById: builder.query({
      query: (id) => `pokemon/${id}`
    })
  }),
});

export const { useGetAllPokemonsQuery, useGetPokemonByIdQuery} = apiSlice
