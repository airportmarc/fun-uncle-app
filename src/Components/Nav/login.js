import React, {Component} from 'react';

class Login extends Component {
  render() {
    return (
      <div className="text-center ">
        <a
        href={`https://accounts.spotify.com/authorize?client_id=${process.env.REACT_APP_SPOTIFY_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_SPOTIFY_REDIRECT_URI}&scope=user-read-private%20user-read-email&response_type=token&state=123`}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          Login with Spotify
        </a>
      </div>
    );
  }
}

export default Login;