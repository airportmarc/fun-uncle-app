import React, {useState} from 'react'
import {IoIosCheckmark, IoIosFlame, IoIosPlay} from "react-icons/io";
import format from 'date-fns/format'

export function TracklistButton(props) {
  const [mouseOver, setMouseOver] = useState(false)
  const [favoriteTrack, setFavoriteTrack] = useState(0)
  const {handleClick, item: {track}, isHeat} = props

  const {artists, album, duration_ms, name, uri} = track
  return (
    <div
      className="flex h-12 items-center hover:bg-blue-100"
      onMouseEnter={() => setMouseOver(true)}
      onMouseLeave={() => setMouseOver(false)}
    >
      <div className="w-16">{isHeat && <IoIosFlame className="h-8 w-8 text-red-600"/>}</div>
      <div className="w-1/4">{name}</div>
      <div className="w-1/4">{artists[0].name}</div>
      <div className="w-1/4 hover:text-blue-100">{album.name}</div>
      <div className="w-16">{format(duration_ms, 'm:ss')}</div>
      <div className="w-1/4 self-start"> {mouseOver &&
      <div className="flex justify-around w-1/6 items-center">
        <IoIosCheckmark
          style={{color: favoriteTrack === track.id ? 'green' : 'inherit'}}
          className="h-10 w-10 text-gray-100 hover:text-green-100" onClick={() => setFavoriteTrack(track.id)}/>
        <IoIosPlay className="h-8 w-6 text-gray-100" onClick={() => window.open(uri)}/>
      </div>}
      </div>
    </div>)


}


