import React  from 'react'
import {useSpotify} from "../../hooks";
import { TracklistButton} from "../Buttons/tracklist.button";

export function TrackListSection(props) {
  const {data, loading} = useSpotify('getTracksFromPlaylist', [props.match.params.playlistId] )
  const { items } = data || {}

  const handleClick = (id) => {
    props.history.push(`/tracklist/${id}`)
  }

  const isHeat = !items || items.reduce((prev, current) => (prev.track.popularity > current.track.popularity) ? prev : current)

  return (
        <div className="flex flex-col  w-full">
        {items && items.map((item, idx) => {
          return (
          <TracklistButton
            isHeat={isHeat ? isHeat.track.id === item.track.id : false}
            key={idx}
            item={item}
            handleClick={handleClick}
          />
          )
        })}
        </div>
  )
}