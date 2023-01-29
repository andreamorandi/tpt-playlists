import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const proxyUrl = 'http://0.0.0.0:8080';
const apiUrl = 'https://api.deezer.com/playlist';

const fetchPlaylistDetails = createAsyncThunk('playlistDetails/fetch', async (id) => {

    // Request after running the following proxy package: https://github.com/Spicy-Sparks/cors
    const response = await axios.get(proxyUrl + '/' + apiUrl + '/' + id);

    return response.data;
});

export { fetchPlaylistDetails };