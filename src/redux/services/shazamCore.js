import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const genre_code = "POP";

export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam-core.p.rapidapi.com/v1",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "dc387badf5mshc9d52227d829889p1d29dbjsnb83e7612392c"
      );

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({
      query: () => `/charts/genre-world?genre_code=${genre_code}`,
    }),
    getSongDetails: builder.query({
      query: ({ songid }) => `/tracks/details?track_id=${songid}`,
    }),
  }),
});

export const { useGetTopChartsQuery, useGetSongDetailsQuery } = shazamCoreApi;
