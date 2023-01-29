import React, { useState } from "react";
import "../styles/PlayButton.scss";

function PlayButton(props) {
    const [isActive, setIsActive] = useState(false);

    const toggleActive = () => {
        setIsActive(!isActive);
    }

    return (
        <div className={`button ${isActive ? 'active' : ''} ${props.container}`}>
            <div className="background"></div>
            <div className="icon">
                <div className="left part"></div>
                <div className="right part"></div>
            </div>
            <div className="pointer" onClick={toggleActive}></div>
        </div>
    );
};

export default PlayButton;
