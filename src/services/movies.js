import axios from 'axios'
const baseUrl = `https://api.themoviedb.org/3/search/movie?api_key=a316805afebbc5d83353daf1e0c1cc4b&language=en-US&query=`
const popularUrl = `https://api.themoviedb.org/3/movie/popular?api_key=a316805afebbc5d83353daf1e0c1cc4b&language=en-US&page=1`
const singleMovieUrl = `https://api.themoviedb.org/3/movie`

/*  const MOVIE_DB_IMAGE_URL = {
	small: "https://image.tmdb.org/t/p/w185",
	medium: "https://image.tmdb.org/t/p/w300",
	large: "https://image.tmdb.org/t/p/w1280",
	original: "https://image.tmdb.org/t/p/original"
  }; */

const getFiltered = (filter) => {
    return axios.get(baseUrl + filter)
}

const getSingleMovie = (id) => {
	return axios.get(`${singleMovieUrl}/${id}?api_key=a316805afebbc5d83353daf1e0c1cc4b&language=en-US`)
}

const getPopular = () => {
	return axios.get(popularUrl)
}

export default { 
	getFiltered, 
	getPopular 
}