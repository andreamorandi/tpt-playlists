import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchPlaylistDetails } from "../core/store/store";
import Skeleton from "./Skeleton";

function PlaylistShow() {
    const dispatch = useDispatch();
    const { isLoading, data, error } = useSelector((state) => {
        return state.playlistDetails;
    });

    const { id } = useParams();

    useEffect(() => {
        if (data.id !== parseInt(id)) dispatch(fetchPlaylistDetails(id));
    }, [id, data.id, dispatch]);

    let content;
    if (isLoading) {
        content = <Skeleton times={6} className="h-10 w-full" />;
    } else if (error) {
        content = <div>Error fetching data...</div>;
    } else if (data.tracks) {
        content = data.tracks.data.map((track) => {
            return (
                <div key={track.id} className="mb-2 border rounded">
                    <div className="flex p-2 justify-between items-center cursor-pointer">
                        {track.title}
                    </div>
                </div>
            );
        });
    }

    return (
        <div>
            <div className="flex flex-row justify-between m-3">
                <h1 className="m-2 text-xl">Tracks</h1>
            </div>
            {content}
        </div>
    );
}

export default PlaylistShow;