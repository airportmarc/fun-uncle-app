import React  from 'react'
import {useSpotify} from "../../hooks";
import {PlaylistButton} from "../Buttons/playlist.button";


export function PlaylistSection(props) {
  const {data, loading} = useSpotify('getPlaylistFromCategory', [props.match.params.catId] )
  const { items } = data ? data.playlists : {}

  const handleClick = (id) => {
    props.history.push(`/tracklist/${id}`)
  }

  return (
        <div className="flex flex-1 flex-wrap w-full">
        {items && items.map(item => {
          return (
          <PlaylistButton
            key={item.id}
            item={item}
            handleClick={handleClick}
          />
          )
        })}
        </div>
  )
}