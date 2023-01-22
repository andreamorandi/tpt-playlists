import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchPlaylists = createAsyncThunk('playlists/fetch', async () => {
    // Request after running the following proxy package: https://github.com/Spicy-Sparks/cors
    const response = await axios.get('http://0.0.0.0:8080/https://api.deezer.com/chart/0/playlists?limit=30');

    // dev only
    await pause(1000);

    return response.data.data;
});

// dev only
const pause = (duration) => {
    return new Promise((resolve) => {
        setTimeout(resolve, duration);
    });
}

export { fetchPlaylists };