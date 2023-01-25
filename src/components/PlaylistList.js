import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPlaylists } from "../core/store/store";
import Skeleton from "./Skeleton";

function PlaylistList() {
    const dispatch = useDispatch();
    const { isLoading, data, error } = useSelector((state) => {
        return state.playlists;
    });

    useEffect(() => {
        if (!data.data.length) dispatch(fetchPlaylists());
    }, [data.data.length, dispatch]);

    let content;
    if (isLoading) {
        content = <Skeleton times={6} className="h-10 w-full" />;
    } else if (error) {
        content = <div>Error fetching data...</div>;
    } else if (data.data) {
        content = data.data.map((playlist) => {
            return <div key={playlist.id} className="mb-2 border rounded">
                <div className="flex p-2 justify-between items-center cursor-pointer">
                    <Link to={`/playlists/${playlist.id}`}>
                        {playlist.title}
                    </Link>
                </div>
            </div>
        });
    }

    return (
        <div>
            <div className="flex flex-row justify-between m-3">
                <h1 className="m-2 text-xl">Playlists</h1>
            </div>
            {content}
        </div>
    );
}

export default PlaylistList;