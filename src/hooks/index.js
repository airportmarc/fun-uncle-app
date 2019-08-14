import React, { useState, useEffect }  from 'react'
import {SpotifyApi,} from "../Api/Spotify";


const Api = new SpotifyApi()

export const useSpotify = (item, params = {}) => {
  const [data, setData] = useState(false);
  const [loading, setLoading] = useState(true);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(async () => {
    const res = await Api[item]({...params});
    const data = await res.data
    console.log("raw", data)
    setData(data);
    setLoading(false);
  }, []);

  return { data, loading };
};