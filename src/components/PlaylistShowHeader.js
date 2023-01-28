import "../styles/PlaylistShowHeader.scss";
import React from "react";
import { secondsToHoursAndMinutes } from "../core/helpers/time";
import { formatNumber } from "../core/helpers/format";

class PlaylistShowHeader extends React.Component {
    render() {
        return (
            <header>
                <div className="header-top">
                    <div className="header-left">
                        <img src={this.props.playlist.picture_medium} alt={this.props.playlist.title} className="playlist-image" />
                    </div>
                    <div className="header-right">
                        <h1>{this.props.playlist.title}</h1>
                        <div className="creator">
                            <i className="fa-solid fa-user"></i>
                            {this.props.playlist.creator && <p>{this.props.playlist.creator.name}</p>}
                        </div>
                        <div className="details">
                            <p>{this.props.playlist.description}</p>
                            <span>{this.props.playlist.nb_tracks} brani - </span>
                            <span>{secondsToHoursAndMinutes(this.props.playlist.duration)} - </span>
                            <span>{formatNumber(this.props.playlist.fans)} fan - </span>
                            <span>Aggiornato: ieri</span>
                        </div>
                        <div className="actions">
                            <div className="play-button-xl">
                                <i className="fa-regular fa-circle-play"></i>
                                <span>Ascolta</span>
                            </div>
                            <div className="circle">
                                <i className="fa-regular fa-heart"></i>
                            </div>
                            <div className="circle">
                                <i className="fa-solid fa-share"></i>
                            </div>
                            <div className="circle">
                                <i className="fa-solid fa-ellipsis"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-bottom">
                    <div className="grid grid-cols-11 gap-4">
                        <div className="col-start-1 col-end-6 ml-5"><span>Brano</span></div>
                        <div className="col-start-8 col-end-10"><span>Artista</span></div>
                        <div className="col-start-10 col-end-12 grid grid-cols-2 gap-2">
                            <div className="col-start-1 col-end-2">
                                <i className="fa-regular fa-clock"></i>
                            </div>
                            <div className="col-start-2 col-end-3 text-center">
                                <i className="fa-regular fa-square square"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </header >
        );
    };
}

export default PlaylistShowHeader;