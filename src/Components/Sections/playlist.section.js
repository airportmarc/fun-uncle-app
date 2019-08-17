import React  from 'react'
import {useSpotify} from "../../hooks";
import {PlaylistButton} from "../Buttons/playlist.button";
import {BaseClass} from "./base.section";
import {CategoryButton} from "../Buttons/category.button";


export function PlaylistSection(props) {
  const {data, loading} = useSpotify('getPlaylistFromCategory', [props.match.params.catId] )
  const { items } = data ? data.playlists : {}

  const handleClick = (id) => {
    props.history.push(`/tracklist/${id}`)
  }

  return <BaseClass items={items} component={PlaylistButton} onClick={handleClick} />
}