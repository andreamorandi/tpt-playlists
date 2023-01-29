import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPlaylists } from "../core/store/store";
import Skeleton from "./Skeleton";
import MultiCarousel from "./MultiCarousel";
import "react-multi-carousel/lib/styles.css";
import "../styles/PlaylistList.scss";

function PlaylistList() {
    const dispatch = useDispatch();
    const { isLoading, data, error } = useSelector((state) => {
        return state.playlists;
    });

    useEffect(() => {
        if (!data.data) dispatch(fetchPlaylists());
    }, [data.data, dispatch]);

    let content;
    if (isLoading) {
        content = <div className="px-5 lg:px-10">
            <div className="flex justify-center gap-6 md:gap-10 mt-24">
                <Skeleton times={1} className="h-14 w-42" />
                <Skeleton times={4} className="h-32 w-32 md:h-52 md:w-52 lg:h-72 lg:w-72" />
            </div>
            <div className="flex justify-center gap-6 md:gap-10 mt-24">
                <Skeleton times={4} className="h-32 w-32 md:h-52 md:w-52 lg:h-72 lg:w-72" />
            </div>
        </div>;
    } else if (error) {
        content = <div>Error fetching data...</div>;
    } else if (data.data) {
        const playlists = data.data;
        const midpoint = Math.ceil(playlists.length / 2);
        const playlistsFirstHalf = playlists.slice(0, midpoint);
        const playlistsSecondHalf = playlists.slice(midpoint);
        content = <main className="list">
            <div className="ms_container">
                <section className="playlist-list-section">
                    <h2 className="section-title">Le migliori playlist pop</h2>
                    <MultiCarousel playlists={playlistsFirstHalf} />
                </section>
                <section className="playlist-list-section">
                    <h2 className="section-title">Pop per ogni momento</h2>
                    <MultiCarousel playlists={playlistsSecondHalf} />
                </section>
            </div>
        </main>;
    }

    return content;
}

export default PlaylistList;