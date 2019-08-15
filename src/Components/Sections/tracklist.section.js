import React  from 'react'
import {useSpotify} from "../../hooks";
import { TracklistButton} from "../Buttons/tracklist.button";

export function TrackListSection(props) {
  const {data, loading} = useSpotify('getTracksFromPlaylist', [props.match.params.playlistId] )
  const { items } = data || {}

  const handleClick = (id) => {
    props.history.push(`/tracklist/${id}`)
  }

  return (
        <div className="flex flex-1 flex-wrap w-full">
        {items && items.map(item => {
          return (
          <TracklistButton
            key={item.id}
            item={item}
            handleClick={handleClick}
          />
          )
        })}
        </div>
  )
}