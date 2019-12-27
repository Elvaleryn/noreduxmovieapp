import React from 'react';
import {
	BrowserRouter as Router,
	Route, Link
} from 'react-router-dom'
import { Card, Button, Row, Col, CardDeck, Container, CardGroup } from 'react-bootstrap'
import Filter from '../components/Filter'

const Movies = ({ movies, filter, handleFilterChange }) => {

	const moviesToShow = movies.filter(movie => movie.title.toLowerCase().includes(filter.toLowerCase()))
	const imgURL = 'https://image.tmdb.org/t/p/w185';

	const show = moviesToShow.map(movie =>
		<Col xs={12} sm={6} md={3} lg={3} xl={3}>
			<CardGroup style={{ marginBottom: '3rem' }}>
				<Card border="dark" style={{ width: '18rem' }, { height: '32rem' }}>
					<Link to={`/${movie.id}`}>
						<Card.Img variant="top" src={imgURL + movie.poster_path} alt='movie poster' style={{ height: '24rem' }} />
					</Link>
					<Card.Body>
						<Card.Title>{movie.title}</Card.Title>
						<Card.Text>
							IMDB:  {movie.vote_average}
						</Card.Text>
					</Card.Body>
				</Card>
			</CardGroup>
		</Col>
		)

	return (
		<div>
			
			<Filter filter={filter} handleFilterChange={handleFilterChange} />
			<Row>
				{show}
			</Row>
		
		</div>
	)
}/* 
<div>
Filter <input value={filter} onChange={handleFilterChange} />
</div> */


export default Movies