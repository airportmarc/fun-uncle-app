import React, { useState, useEffect }  from 'react'
import {SpotifyApi,} from "../Api/Spotify";
import axios from 'axios'


const Api = new SpotifyApi()

export const useSpotify = (item, params = []) => {
  const [data, setData] = useState(false);
  const [loading, setLoading] = useState(true);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect( () => {

    async function gatherData() {
      const res = await Api[item]([...params]);
      const data = await res.data
      console.log("raw", data)
      setData(data);
      setLoading(false);
    }
    gatherData()
  }, []);

  return { data, loading };
};