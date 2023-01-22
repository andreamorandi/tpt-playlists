import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPlaylists } from "../core/store";
import Skeleton from "./Skeleton";

function PlaylistsList() {
    const dispatch = useDispatch();
    const { isLoading, data, error } = useSelector((state) => {
        return state.playlists;
    });

    useEffect(() => {
        dispatch(fetchPlaylists());
    }, [dispatch]);

    let content;
    if (isLoading) {
        content = <Skeleton times={6} className="h-10 w-full" />;
    } else if (error) {
        content = <div>Error fetching data...</div>;
    } else {
        content = data.map((playlist) => {
            return <div key={playlist.id} className="mb-2 border rounded">
                <div className="flex p-2 justify-between items-center cursor-pointer">
                    {playlist.title}
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

export default PlaylistsList;