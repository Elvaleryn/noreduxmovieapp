import React from 'react';
import {
	BrowserRouter as Router,
	Route, Link
} from 'react-router-dom'


const PopularMovies = ({ popular, filter, handleFilterChange }) => {

	const popularMovies = popular.map(movie =>

		<Link to={`/${movie.id}`}>	<li key={movie.id}>{movie.title} {movie.vote_average}</li> </Link>

	)

	return (
		<div>
			<div>
            Filter <input value={filter} onChange={handleFilterChange} />
        </div>
			{popularMovies}
		</div>
	)
}



export default PopularMovies