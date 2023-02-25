import { configureStore } from "@reduxjs/toolkit";

import playerReducer from "./features/playerSlice";
import { youtubeCoreApi } from "./services/youtubeCore";

export const store = configureStore({
  reducer: {
    [youtubeCoreApi.reducerPath]: youtubeCoreApi.reducer,
    player: playerReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(youtubeCoreApi.middleware),
});
