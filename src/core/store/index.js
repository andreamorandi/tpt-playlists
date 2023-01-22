import { configureStore } from "@reduxjs/toolkit";
import { playlistsReducer } from "./slices/playlistsSlice";

export const store = configureStore({
    reducer: {
        playlists: playlistsReducer
    },
});

export * from "./thunks/fetchPlaylists";