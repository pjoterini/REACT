import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const youtubeCoreApi = createApi({
  reducerPath: "youtubeCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://youtube-v31.p.rapidapi.com/",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        import.meta.env.VITE_SHAZAM_CORE_RAPID_API_KEY
      );
      headers.set("X-RapidAPI-Host", "youtube-v31.p.rapidapi.com");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getSuggested: builder.query({
      query: () => "/search?q=music&part=snippet,id",
    }),
  }),
});

export const { useGetSuggestedQuery } = youtubeCoreApi;
