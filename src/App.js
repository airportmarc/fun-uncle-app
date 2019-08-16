import React from 'react';
import './App.css';
import {ButtonBody} from "./Components/ButtonBody";

function App() {
  return (
    <div>
      <a
        href={`https://accounts.spotify.com/authorize?client_id=${process.env.REACT_APP_SPOTIFY_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_SPOTIFY_REDIRECT_URI}&scope=user-read-private%20user-read-email&response_type=token&state=123`}>
        Login with Spotify
      </a>
      <h1 className="pt-24">Welcome, Its Friday afternoon, what are you in the mood for?</h1>
      <ButtonBody/>
    </div>
  );
}

export default App;