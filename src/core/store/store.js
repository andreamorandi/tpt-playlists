import { configureStore } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";
import { playlistsReducer } from "./slices/playlistsSlice";
import { playlistDetailsReducer } from "./slices/playlistDetailsSlice";
import { fromJS } from "immutable";
import createTransform from "redux-persist/es/createTransform";
import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist/es/constants";

const immutableTransform = createTransform(
    (inboundState) => fromJS(inboundState),
    (outboundState) => outboundState.toJS(),
    { whitelist: ["playlists", "playlistDetails"] }
);

const persistConfigPlaylists = {
    key: 'playlists',
    storage,
    transforms: [immutableTransform]
}
const persistedPlaylistsReducer = persistReducer(persistConfigPlaylists, playlistsReducer);

const persistConfigPlaylistDetails = {
    key: 'playlistDetails',
    storage,
    transforms: [immutableTransform]
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