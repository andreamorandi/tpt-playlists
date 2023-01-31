import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchPlaylistDetails } from "../../core/store/store";
import Skeleton from "../Skeleton";
import PlaylistShowHeader from "./PlaylistShowHeader";
import PlaylistShowTrack from "./PlaylistShowTrack";
import "../../styles/PlaylistShow/PlaylistShow.scss";

function PlaylistShow() {
    const dispatch = useDispatch();
    const { isLoading, data, error } = useSelector((state) => {
        return state.playlistDetails;
    });

    const { id } = useParams();

    useEffect(() => {
        if (!data.id || data.id !== parseInt(id)) dispatch(fetchPlaylistDetails(id));
    }, [id, data.id, dispatch]);

    let content;
    if (isLoading) {
        content = <div className="px-5 lg:px-10">
            <div className="flex justify-start gap-10 mt-5">
                <Skeleton times={1} className="h-52 w-52" />
                <Skeleton times={1} className="h-52 w-2/5" />
            </div>
            <div className="mt-14">
                <Skeleton times={10} className="h-14 w-full mt-4" />
            </div>
        </div>;
    } else if (error) {
        content = <div>C'è stato un errore nel caricamento delle tracce.</div>;
    } else if (data.tracks) {
        const tracks = data.tracks.data.map((track) => {
            return (
                <li key={track.id}>
                    <PlaylistShowTrack track={track} />
                </li>
            );
        });
        content = <>
            <PlaylistShowHeader playlist={data} />
            <main className="show">
                <div className="ms_container">
                    <ul>
                        {tracks}
                    </ul>
                </div>
            </main>
        </>;
    }

    return content;
}

export default PlaylistShow;