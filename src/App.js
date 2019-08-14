import React from 'react';
import './App.css';
import {ButtonBody} from "./Components/ButtonBody";

function App() {
  return (
    <div>
      <a href="https://accounts.spotify.com/authorize?client_id=36421c22177a461097ba41df86d40ec5&redirect_uri=http:%2F%2Fexample.com%2Fcallback&scope=user-read-private%20user-read-email&response_type=token&state=123">
        Login with Spotify
      </a>
      <h1 className="pt-24">Welcome, Its Friday afternoon, what are you in the mood for?</h1>
      <ButtonBody/>
    </div>
  );
}

export default App;
