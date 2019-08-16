import React from 'react'
import {BrowserRouter as Router, Redirect, Route} from 'react-router-dom'
import {MainNavigation} from "./Components/Nav";
import Login from "./Components/Nav/login";
import {ReceiveToken} from "./Components/Auth/receivetoken.auth";
import {CategorySection} from "./Components/Sections/category.section";
import {PlaylistSection} from "./Components/Sections/playlist.section";
import {TrackListSection} from "./Components/Sections/tracklist.section";


export function PrivateRoute({component: Component, authed, ...rest}) {

  return (
    <Route
      {...rest}
      render={(props) => authed === true
        ? <Component {...props} />
        : <Redirect to={{pathname: '/login'}}/>}
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
        <Route excat path="/login" component={Login}/>
        <Route path="/redirect" component={ReceiveToken}/>
        <PrivateRoute excat authed={token.auth} path="/categories" component={CategorySection}/>
        <PrivateRoute excat authed={token.auth} path="/playlists/:catId" component={PlaylistSection}/>
        <PrivateRoute excat authed={token.auth} path="/tracklist/:playlistId" component={TrackListSection}/>
      </div>
    </Router>
  )
}