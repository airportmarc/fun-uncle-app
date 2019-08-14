import axios from 'axios'

axios.defaults.headers.common['Authorization'] = 'Bearer BQAH339m9pavgStqccj0ybtx8AUXd-1ku9-CS71Hm8V44S1YrgLIC6HP6_CrEVCrzcGSNz6GhOhfWD8Yy69tc3jEj8-1qnc939XQQzlpHg0Y713hsBgahDXZEU3-yaEID7v8bW2eQgEkzTmcZDtMjqHBJSa3Aj6xCqDP_w' // for all requests

const SpotifyApi = function () {
  let http = axios.create({
    baseURL: 'https://api.spotify.com/v1/',
    timeout: 1000,
    headers: {'Authorization': 'Bearer BQC8wQIj6ZoD71R25OSQPAXGFiLqU0vrldP1mpps-Cqx55fHUVXr-8QlPtARyy4SC8R14ZWoh_cEd-v2mucAOPpIYCFaQFucHYe3q65A3HL0CFUF8GLYhtlZGT3KDKbFmVUe2Lt4dehHIy41YVlXasZMrOy8WHxgd0BDag'}
  });
  this.getHttp = function() {
    return http
  }
};

SpotifyApi.prototype.getCategoryList =function () {
  return this.getHttp().get('browse/categories?country=CA&limit=10')
}

SpotifyApi.prototype.getPlaylistFromCategory =function (categoryId) {
  return this.getHttp().get(`browse/categories/${categoryId}/playlists&limit=10`)
}

SpotifyApi.prototype.getTracksFromPlaylist =function (playlistId) {
  return this.getHttp().get(`/v1/playlists/${playlistId}/tracks&limit=10`)
}

export {SpotifyApi}