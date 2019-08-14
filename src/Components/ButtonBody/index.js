import React, { useState, useEffect }  from 'react'
import CategoryButton from "../Buttons/category.button";
import axios from 'axios'
import {Client, TrackHandler, PlaylistHandler} from 'spotify-sdk';

axios.defaults.headers.common['Authorization'] = 'Bearer ' // for all requests


export default class ButtonBody extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      data: false
    }
  }

  componentDidMount() {
    axios.get('https://api.spotify.com/v1/browse/categories?country=CA&limit=10').then(resp => {
      this.setState({data: resp.data.categories.items.sort(() => .5 - Math.random()).slice(0,5)})
    })
  }

  showPlaylist(categoryId) {
    const url = `https://api.spotify.com/v1/browse/categories/${categoryId}/playlists?country=ca&limit=10`
    axios.get(url).then(resp => {
      this.setState({data: resp.data.playlists.items.sort(() => .5 - Math.random()).slice(0,5)})
    })
  }

  showTracks(playlistId) {
    const url = `https://api.spotify.com/v1/playlists/${playlistId}/tracks`
    axios.get(url).then(resp => {
      console.log(resp.data)
    })


  }


  render() {
    return (
      <div className="flex flex-1 flex-wrap w-full">
        {this.state.data && this.state.data.map(item => {
          return <CategoryButton key={item.id} handleClick={this.showPlaylist.bind(this)} item={item} />
        })}

      </div>
    )
  }
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
