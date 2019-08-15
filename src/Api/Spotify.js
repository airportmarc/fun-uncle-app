import axios from 'axios'
const rawString = window.localStorage.getItem('token') || "null"
const authItem = JSON.parse(rawString)

const SpotifyApi = function () {
  let http = axios.create({
    baseURL: 'https://api.spotify.com/v1/',
    timeout: 1000,
    headers: {'Authorization': `${authItem.token_type} ${authItem.access_token}`}
  });
  this.getHttp = function() {
    return http
  }
};

SpotifyApi.prototype.getCategoryList =function () {
  return this.getHttp().get('browse/categories?country=CA&limit=10')
}

SpotifyApi.prototype.getPlaylistFromCategory =function (categoryId) {
  return this.getHttp().get(`browse/categories/${categoryId}/playlists?country=CA&limit=10`)
}

SpotifyApi.prototype.getTracksFromPlaylist =function (playlistId) {
  return this.getHttp().get(`/playlists/${playlistId}/tracks?market=CA&limit=10`)
}

export {SpotifyApi}