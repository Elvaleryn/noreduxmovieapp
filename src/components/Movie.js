import React from 'react'
import actorsService from '../services/actors'
import moviesService from '../services/movies'
import { useState, useEffect } from 'react'

const Movie = ({ movie }) => {
	
	const [actors, setActors] = useState([])
	const [chosen, setChosen] = useState([])
	
	const ids = movie.id
		
	   useEffect(() => {
    moviesService.getSingleMovie(ids)
      .then(response => {
        setChosen(response.data)
      })
  }, [ids])
	
	 useEffect(() => {
    actorsService.getActors(ids)
      .then(response => {
        setActors(response.data)
      })
  }, [ids])
	
	const showActors = actors.cast.map(actor => <li key={actor.id}>{actor.name}</li>)
																		 
	const showMovie = chosen.map(m => <li key={m.id}>{m.title} {m.overview}</li>)

	return (
		<div>
			<h2>{movie.title}</h2>
			<p>{movie.overview}</p>
			<p>{showActors}</p>
			<p>{showMovie}</p>
		</div>
	)
}

export default Movie