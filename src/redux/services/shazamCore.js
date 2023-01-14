import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const genre_code = "POP";

export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "",
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
      query: () =>
        `https://shazam-core.p.rapidapi.com/v1/charts/genre-world?genre_code=${genre_code}`,
    }),
    getSongDetails: builder.query({
      query: ({ songid }) =>
        `https://shazam-core.p.rapidapi.com/v1/tracks/details?track_id=${songid}`,
    }),
    getSongRelated: builder.query({
      query: ({ songid }) =>
        `https://shazam-core.p.rapidapi.com/v1/tracks/related?track_id=${songid}`,
    }),
    // getArtistDetails: builder.query({
    //   query: (artistId) =>
    //     `https://shazam-core.p.rapidapi.com/v2/artists/details?artist_id=${artistId}`,
    // }),
  }),
});

export const {
  useGetTopChartsQuery,
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
  // useGetArtistDetailsQuery,
} = shazamCoreApi;
