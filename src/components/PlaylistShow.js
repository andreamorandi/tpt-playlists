import "../styles/PlaylistShow.scss";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchPlaylistDetails } from "../core/store/store";
import Skeleton from "./Skeleton";
import PlaylistShowHeader from "./PlaylistShowHeader";
import PlaylistShowTrack from "./PlaylistShowTrack";

function PlaylistShow() {
    const dispatch = useDispatch();
    const { isLoading, data, error } = useSelector((state) => {
        return state.playlistDetails;
    });

    const { id } = useParams();

    useEffect(() => {
        if (!data.id || data.id !== parseInt(id)) dispatch(fetchPlaylistDetails(id));
    }, [id, data.id, dispatch]);

    let tracks;
    if (isLoading) {
        return <Skeleton times={6} className="h-10 w-full" />;
    } else if (error) {
        return <div>C'è stato un errore nel caricamento delle tracce.</div>;
    } else if (data.tracks) {
        tracks = data.tracks.data.map((track) => {
            return (
                <li key={track.id}>
                    <PlaylistShowTrack track={track} />
                </li>
            );
        });
    }

    return (
        <div>
            <PlaylistShowHeader playlist={data} />
            <main>
                <div className="ms_container">
                    <ul>
                        {tracks}
                    </ul>
                </div>
            </main>
        </div>
    );
}

export default PlaylistShow;