import React from 'react'
import { useState, useEffect } from 'react'
import moviesService from './services/movies'
import Movies from './components/Movies'
import PopularMovies from './components/PopularMovies'
import Menu from './components/Menu'
import Movie from './components/Movie'
import {
	BrowserRouter as Router,
	Route, Link, Redirect, withRouter
} from 'react-router-dom'

const App = () => {
	
	const [filter, setFilter] = useState("")
	const [movies, setMovies] = useState([])
	const [popular, setPopular] = useState([])
	
	  useEffect(() => {
    moviesService.getFiltered(filter)
      .then(response => {
        setMovies(response.data)
      })
  }, [filter]) 
		  useEffect(() => {
    moviesService.getPopular()
      .then(response => {
        setPopular(response.data.results)
      })
  }, [])
	
		const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }
	
	
	const movieById = (id) =>
		movies.find(a => a.id === Number(id))

	const popularById = (id) =>
		popular.find(a => a.id === Number(id))
	
  return (
    <div>
			<h2>Movieapp</h2>
			<Router>
				<Menu />
				<Route exact path="/popular" render={() =>
					<PopularMovies popular={popular} />
				} />
				<Route exact path="/search" render={() =>
					<Movies movies={movies} filter={filter} handleFilterChange={handleFilterChange} />
				} />
				<Route exact path="/search/:id" render={({match}) => <Movie movie={movieById(match.params.id)} />} />
				} />
				<Route exact path="/popular/:id" render={({match}) => <Movie movie={popularById(match.params.id)} />} />
			</Router>
    </div>
  )
}

export default App
