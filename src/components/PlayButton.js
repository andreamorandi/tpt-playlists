import React, { useState } from "react";
import "../styles/PlayButton.scss";

function PlayButton() {
    const [isActive, setIsActive] = useState(false);

    const toggleActive = () => {
        setIsActive(!isActive);
    }

    return (
        <div className={`button ${isActive ? 'active' : ''}`}>
            <div className="background"></div>
            <div className="icon" width="50" height="50">
                <div className="left part"></div>
                <div className="right part"></div>
            </div>
            <div className="pointer" onClick={toggleActive}></div>
        </div>
    );
};

export default PlayButton;
