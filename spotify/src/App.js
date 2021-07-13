import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Login from "./Login";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import { useDataLayerValue } from "./DataLayer";

// https://github.com/yarinek/spotify-clone/tree/main/src
//https://github.com/Raphjacksun7/spotify-clone-client
//https://github.com/JL978/spotify-clone-client

const spotify = new SpotifyWebApi();

function App() {
  const [token1, setToken1] = useState(null);
  const [{ user, token, playlists }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      dispatch({ type: "SET_TOKN", token: _token });
      // setToken(_token);
      setToken1(_token);
      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        dispatch({ type: "SET_USER", user: user });
      });

      spotify.getUserPlaylists().then((playlist) => {
        dispatch({ type: "SET_PLAYLISTS", playlists: playlists });
      });
    }
    console.log("I have a TOKEN", hash);
  }, []);
  console.log("show me the user", user);
  console.log("show me the user", user);
  return (
    <div className="app">
      {token1 ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
