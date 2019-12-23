import React from 'react';
import {
	BrowserRouter as Router,
	Route, Link
} from 'react-router-dom'


const PopularMovies = ({popular}) => {
	
	const imgURL = 'https://image.tmdb.org/t/p/w185';
	
	const popularMovies = popular.results.map(movie =>
		
		<Link to={`/popular/${movie.id}`}>	<li key={movie.id}>{movie.title} {movie.vote_average}</li> </Link>
		
	)

	return (
		<div>
				{popularMovies}
		</div>
	)
}



export default PopularMovies