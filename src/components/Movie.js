import React from 'react'
import actorsService from '../services/actors'
import moviesService from '../services/movies'
import { useState, useEffect } from 'react'

const Movie = ({ ids }) => {

	const [actors, setActors] = useState([])
	const [singleMovie, setSingleMovie] = useState([])

	console.log(singleMovie);
	console.log(ids.id);
	
	useEffect(() => {
		moviesService.getSingleMovie(ids.id)
		  .then(response => {
			setSingleMovie(response.data)
		  })
	  }, [ids.id])
		
		 useEffect(() => {
		actorsService.getActors(ids.id)
		  .then(response => {
			setActors(response.data.cast)
		  })
	  }, [ids.id])
	
	const showActors = actors.map(actor => <li key={actor.id}>{actor.name}</li>)
																		 
/* 	const showMovie = singleMovie.map(m => <li key={m.id}>{m.title} {m.overview}</li>)
 */
	

	return (
		<div>
			<p>{showActors}</p>
			<p>{singleMovie.overview}</p>
		</div>
	)
}

export default Movie