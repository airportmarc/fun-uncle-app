import React from 'react'
import useLocalStorage from "react-use-localstorage";


export function ReceiveToken(props) {
  const urlString = props.location.hash.substr(1)
  let authItem = {}
  urlString.split('&').map(i => i.split("=")).forEach(arr => authItem[arr[0]] = arr[1])
  if('access_token' in authItem) authItem.auth = true;
  window.localStorage.setItem('token', JSON.stringify(authItem))
  // This is not elegant, a little hacky.  But, with no global store, and the app already loaded, I did not know of
  // another way to get the token to the API element..
  window.location.assign('/categories')

  return null

}
