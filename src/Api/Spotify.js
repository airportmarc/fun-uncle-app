import axios from 'axios'

axios.defaults.headers.common['Authorization'] = 'Bearer BQAH339m9pavgStqccj0ybtx8AUXd-1ku9-CS71Hm8V44S1YrgLIC6HP6_CrEVCrzcGSNz6GhOhfWD8Yy69tc3jEj8-1qnc939XQQzlpHg0Y713hsBgahDXZEU3-yaEID7v8bW2eQgEkzTmcZDtMjqHBJSa3Aj6xCqDP_w' // for all requests


export const SpotifyApi = {
  getPlaylistFromCategory(categoryId) {
    return axios.get('https://api.spotify.com/v1/browse/categories?country=CA&limit=10')
  },
  getCategoryList() {
    return axios.get('https://api.spotify.com/v1/browse/categories?country=CA&limit=10')
  },


}

const TestApi = function () {
  let http = axios.create({
    baseURL: 'https://api.spotify.com/v1/',
    timeout: 1000,
    headers: {'Authorization': 'Bearer BQAH339m9pavgStqccj0ybtx8AUXd-1ku9-CS71Hm8V44S1YrgLIC6HP6_CrEVCrzcGSNz6GhOhfWD8Yy69tc3jEj8-1qnc939XQQzlpHg0Y713hsBgahDXZEU3-yaEID7v8bW2eQgEkzTmcZDtMjqHBJSa3Aj6xCqDP_w'}
  });
  this.getHttp = function() {
    return http
  }
};

TestApi.prototype.getCatList =function () {
  return this.getHttp().get('browse/categories?country=CA&limit=10')

}

export {TestApi}