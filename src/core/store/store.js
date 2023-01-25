import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { playlistsReducer } from "./slices/playlistsSlice";
import { playlistDetailsReducer } from "./slices/playlistDetailsSlice";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";

const persistConfigPlaylists = {
    key: 'playlists',
    storage
}
const persistedPlaylistsReducer = persistReducer(persistConfigPlaylists, playlistsReducer);

const persistConfigPlaylistDetails = {
    key: 'playlistDetails',
    storage
}
const persistedPlaylistDetailsReducer = persistReducer(persistConfigPlaylistDetails, playlistDetailsReducer);

const store = configureStore({
    reducer: {
        playlists: persistedPlaylistsReducer,
        playlistDetails: persistedPlaylistDetailsReducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
});

let persistor = persistStore(store);

export { store, persistor };

export * from "./thunks/fetchPlaylists";

export * from "./thunks/fetchPlaylistDetails";