import axios from 'axios'
const baseUrl = `https://api.themoviedb.org/3/movie`

/*  const MOVIE_DB_IMAGE_URL = {
	small: "https://image.tmdb.org/t/p/w185",
	medium: "https://image.tmdb.org/t/p/w300",
	large: "https://image.tmdb.org/t/p/w1280",
	original: "https://image.tmdb.org/t/p/original"
  }; */

const getActors = (id) => {
  return axios.get(`${baseUrl}/${id}/credits?api_key=a316805afebbc5d83353daf1e0c1cc4b`)
}

export default {
  getActors
}