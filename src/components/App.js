import "../styles/App.scss";
import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import PlaylistList from "./PlaylistList";
import PlaylistShow from "./PlaylistShow";
import NotFound from "./NotFound";

function App() {
    return (
        <>
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route path="/" exact component={PlaylistList} />
                        <Route path="/playlists/:id" exact component={PlaylistShow} />
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </BrowserRouter>
        </>
    );
};

export default App;