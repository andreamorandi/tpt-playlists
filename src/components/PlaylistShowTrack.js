import "../styles/PlaylistShowTrack.scss";
import React, { useState } from "react";
import { secondsToMinutesAndSeconds } from "../core/helpers/time";
import PlayButton from "./PlayButton";

function PlaylistShowTrack(props) {
    const [isHover, setIsHover] = useState(false);

    return (
        <div className="grid grid-cols-11 gap-4 py-2 ms_track" onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
            <div className="col-start-1 col-end-6 flex items-center ml-5">
                <div className="image-wrapper">
                    <img src={props.track.album.cover_small} alt={props.track.album.title} className="rounded" />
                    {isHover && <PlayButton />}
                </div>
                <p className="text-ellipsis overflow-hidden whitespace-nowrap ml-3">{props.track.title}</p>
            </div>
            <div className="col-start-6 col-end-8 flex items-center justify-center">
                <i className="fa-solid fa-microphone-lines px-2 sm:px-3 md:px-4 lg:px-5"></i>
                <i className="fa-regular fa-heart px-2 sm:px-3 md:px-4 lg:px-5"></i>
                <i className="fa-solid fa-ellipsis px-2 sm:px-3 md:px-4 lg:px-5"></i>
            </div>
            <div className="col-start-8 col-end-10 flex items-center">
                <p className="text-ellipsis overflow-hidden whitespace-nowrap">{props.track.artist.name}</p>
            </div>
            <div className="col-start-10 col-end-12 grid grid-cols-2 gap-2 flex items-center">
                <div className="col-start-1 col-end-2">
                    <span>{secondsToMinutesAndSeconds(props.track.duration)}</span>
                </div>
                <div className="col-start-2 col-end-3 text-center">
                    <i className="fa-regular fa-square square"></i>
                </div>
            </div>
        </div >
    );
}

export default PlaylistShowTrack;