import { createSlice } from "@reduxjs/toolkit";
import { fetchPlaylistDetails } from "../thunks/fetchPlaylistDetails";

const playlistDetailsSlice = createSlice({
    name: 'playlistDetails',
    initialState: {
        data: [],
        isLoading: false,
        error: null,
    },
    extraReducers(builder) {
        builder.addCase(fetchPlaylistDetails.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchPlaylistDetails.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchPlaylistDetails.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error;
        });
    }
});

export const playlistDetailsReducer = playlistDetailsSlice.reducer;