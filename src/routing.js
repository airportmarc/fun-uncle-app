import React from 'react'
import {BrowserRouter as Router, Redirect, Route} from 'react-router-dom'
import App from './App'
import {MainNavigation} from "./Components/Nav";
import {ReceiveToken} from "./Components/Auth/receivetoken.auth";
import {CategorySection} from "./Components/Sections/category.section";
import {PlaylistSection} from "./Components/Sections/playlist.section";
import {TrackListSection} from "./Components/Sections/tracklist.section";


function PrivateRoute({component: Component, authed, ...rest}) {

  return (
    <Route
      {...rest}
      render={(props) => authed === true
        ? <Component {...props} />
        : <Redirect to={{pathname: '/'}}/>}
    />
  )
}

export function Routing() {
  let token = window.localStorage.getItem('token') || '{"auth": "false"}'
  token = JSON.parse(token)


  return (
    <Router>
      <div className="App min-h-screen px-5 ">
        <MainNavigation/>
        <div>
          <Route path="/" component={App}/>
          <Route path="/redirect" component={ReceiveToken}/>
          <PrivateRoute authed={token.auth} path="/categories" component={CategorySection}/>
          <PrivateRoute authed={token.auth} path="/playlists/:catId" component={PlaylistSection}/>
          <PrivateRoute authed={token.auth} path="/tracklist/:playlistId" component={TrackListSection}/>

        </div>
      </div>
    </Router>
  )
}