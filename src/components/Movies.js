import React from 'react';
import {
	BrowserRouter as Router,
	Route, Link
} from 'react-router-dom'
import Filter from '../components/Filter'


const Movies = ({movies, handleFilterChange, filter}) => {
	
	const imgURL = 'https://image.tmdb.org/t/p/w185';
	const moviesToShow = ({ movies, filter }) => {
		return movies.results.filter(movie => movie.title.toLowerCase().includes(filter.toLowerCase()))
}
	const show = moviesToShow.map(movie =>	
		<Link to={`/search/${movie.id}`}>	<li key={movie.id}>{movie.title} {movie.vote_average}</li> </Link>
	)

	return (
		<div>
				<Filter filter={filter} handleFilterChange={handleFilterChange}/>
				{show}
		</div>
	)
}



export default Movies