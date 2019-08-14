import React from 'react'
import {BrowserRouter as Router, Redirect, Route} from 'react-router-dom'
import App from './App'
import {MainNavigation} from "./Components/Nav";
import useLocalStorage from 'react-use-localstorage';



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
  const [item, setItem] = useLocalStorage('token', false);
  const authItem = (JSON.parse(item))
  console.log(`TOKEN ${authItem.auth}`)

  return (
    <Router>
      <div className="App min-h-screen px-5 ">
        <MainNavigation/>
        <div>
          <Route path="/" component={App}/>
          <PrivateRoute authed={authItem.auth} path="/categories" component={App}/>
          <PrivateRoute authed={authItem.auth} path="/playlists/:catId" component={App}/>
          <PrivateRoute authed={authItem.auth} path="/tracklist/:playlistId" component={App}/>

        </div>
      </div>
    </Router>
  )
}