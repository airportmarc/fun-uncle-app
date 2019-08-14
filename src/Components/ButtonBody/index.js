import React, { useState, useEffect }  from 'react'
import { CategoryButton } from "../Buttons/category.button";
import {useSpotify} from "../../hooks";


export function ButtonBody(props) {
  // const {data, loading} = useSpotify('getCategoryList')
  // const { items } = data ? data.categories : {}

  // showPlaylist(categoryId) {
  //   Api.getPlaylistFromCategory(categoryId.then(resp => {
  //     this.setState({data: resp.data.playlists.items.sort(() => .5 - Math.random()).slice(0,5)})
  //   }))
  // }
  //
  // showTracks(playlistId) {
  //   Api.getTracksFromPlaylist(playlistId).then(resp => {
  //     console.log(resp.data)
  //   })
  // }
  return (
    <div>HI

      {/*  <div className="flex flex-1 flex-wrap w-full">*/}
      {/*  {items && items.map(item => {*/}
      {/*    return <CategoryButton key={item.id}  item={item} />*/}
      {/*  })}*/}

      {/*</div>*/}
    </div>

  )
}

// export default function ButtonBody(props) {
//   return (
//     <div>
//       <Buttons />
//
//     </div>
//   )
//
//
//
// }
