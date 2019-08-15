import React from 'react'


export function TracklistButton(props){
  const {handleClick, item: {track} } = props
    return (
      <div className="flex mx-4 my-4">
        <div>Artists {track.artists.length}</div>
      </div>)


}


