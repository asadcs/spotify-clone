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
  const [token, setToken] = useState(null);
  const [{ user }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);

      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        dispatch({ type: "SET_USER", user: user });
      });
    }
    console.log("I have a TOKEN", hash);
  }, []);
  console.log("show me the user", user);
  return (
    <div className="app">{token ? <Player></Player> : <Login></Login>}</div>
  );
}

export default App;
