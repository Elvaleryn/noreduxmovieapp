import React from 'react';
import {
	BrowserRouter as Router,
	Route, Link
} from 'react-router-dom'

const Movies = ({ movies, filter, handleFilterChange }) => {

	const moviesToShow =  movies.filter(movie => movie.title.toLowerCase().includes(filter.toLowerCase()))
	
	const show = moviesToShow.map(movie =>
		<Link to={`/${movie.id}`}>	<li key={movie.id}>{movie.title} {movie.vote_average}</li> </Link>
	)

	return (
		<div>
			<div>
            Filter <input value={filter} onChange={handleFilterChange} />
        </div>
			{show}
		</div>
	)
}



export default Movies