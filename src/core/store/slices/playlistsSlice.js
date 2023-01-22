import { createSlice } from "@reduxjs/toolkit";
import { fetchPlaylists } from "../thunks/fetchPlaylists";

const playlistsSlice = createSlice({
    name: 'playlists',
    initialState: {
        data: [],
        isLoading: false,
        error: null,
    },
    extraReducers(builder) {
        builder.addCase(fetchPlaylists.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchPlaylists.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchPlaylists.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error;
        });
    }
});

export const playlistsReducer = playlistsSlice.reducer;