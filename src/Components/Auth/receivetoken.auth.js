import React from 'react'
import useLocalStorage from "react-use-localstorage";


export function ReceiveToken(props) {
  const urlString = props.location.hash.substr(1)
  let authItem = {}
  urlString.split('&').map(i => i.split("=")).forEach(arr => authItem[arr[0]] = arr[1])
  if('access_token' in authItem) authItem.auth = true;
  window.localStorage.setItem('token', JSON.stringify(authItem))
  window.location.assign('/categories')

  return null

}
