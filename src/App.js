import React from 'react'
import { useState, useEffect } from 'react'
import moviesService from './services/movies'
import actorsService from './services/actors'
import Movies from './components/Movies'
import PopularMovies from './components/PopularMovies'
import Menu from './components/Menu'
import Movie from './components/Movie'
import Filter from './components/Filter'

import {
	BrowserRouter as Router,
	Route, Link, Redirect, withRouter, Switch
} from 'react-router-dom'

const App = () => {

	const [filter, setFilter] = useState("")
	const [movies, setMovies] = useState([])
	const [popular, setPopular] = useState([])

	const realFilter = (filter.length === 0) ? 'dgsdgsgsgsgsdgsdgsdgsg' : filter

	/* 	console.log(popular);
		console.log(movies);
		console.log(filter);
	 */

	useEffect(() => {
		moviesService.getPopular()
			.then(response => {
				setPopular(response.data.results)
			})
	}, [])
	useEffect(() => {
		moviesService.getFiltered(realFilter)
			.then(response => {
				setMovies(response.data.results)
			})
	}, [realFilter])

	const handleFilterChange = (event) => {
		setFilter(event.target.value)
	}


	const movieById = (id) =>
		movies.find(a => a.id === Number(id))


	const popularById = (id) =>
		popular.find(a => a.id === Number(id))

	if (filter.length === 0) {
		return (
			<div>
				<h2>Movieapp</h2>
				<Router>

					<Route exact path="/" render={() =>
						<PopularMovies popular={popular} filter={filter} handleFilterChange={handleFilterChange} />
					} />
					<Route exact path="/:id" render={({ match }) => <Movie ids={popularById(match.params.id)} />} />
				</Router>
			</div>
		)
	}

	return (
		<div>
			<h2>Movieapp</h2>
			<Router>
				
				<Route exact path="/" render={() =>
					<Movies movies={movies} filter={filter} handleFilterChange={handleFilterChange} />
				} />
					<Route exact path="/:id" render={  ({ match }) =><Movie ids={movieById(match.params.id)}/> 	
				}/>
			</Router>
		</div>
	)
}

export default App
