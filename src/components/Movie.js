import React from 'react'
import actorsService from '../services/actors'
import moviesService from '../services/movies'
import { useState, useEffect } from 'react'
import { Card, Button, Row, Col, CardDeck, Container, CardGroup } from 'react-bootstrap'

const Movie = ({ ids }) => {

	const [actors, setActors] = useState([])
	const [singleMovie, setSingleMovie] = useState([])

	/* console.log(singleMovie);
	console.log(ids.id); */
	/* 	console.log(`ACTORS: ${actors}`);
		console.log(`SINGLEMOVIE: ${singleMovie}`);
		console.log( `IDS: ${ids}`); */




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
	const imgURL = 'https://image.tmdb.org/t/p/w185'
	const fullSize = 'https://image.tmdb.org/t/p/w1280'

	const showActors = actors.map(actor => <li key={actor.id}>{actor.name}
		<img src={imgURL + actor.profile_path} />


	</li>)
	/* 
	<Card className="bg-dark text-white">
	  <Card.Img src="holder.js/100px270" alt="Card image" />
	  <Card.ImgOverlay>
		<Card.Title>Card title</Card.Title>
		<Card.Text>
		  This is a wider card with supporting text below as a natural lead-in to
		  additional content. This content is a little bit longer.
		</Card.Text>
		<Card.Text>Last updated 3 mins ago</Card.Text>
	  </Card.ImgOverlay>
	</Card> */


	const background = `${fullSize}/${singleMovie.poster_path}`
	return (
		<>
		<Container>
			<Card style={{marginTop: '5px'}} className="bg-dark text-white">
				<Card.Img src= {background}/>
				<Card.ImgOverlay>
					<Card.Title>{singleMovie.title}</Card.Title>
					<Card.Text>
						This is a wider card with supporting text below as a natural lead-in to
						additional content. This content is a little bit longer.
    				</Card.Text>
					<Card.Text>Last updated 3 mins ago</Card.Text>
				</Card.ImgOverlay>
			</Card>
			</Container>
		</>
	)
}

/* 
<div className="w-100 h-100 position-fixed fixed-top"
style={{
	backgroundImage: `url(${background})`,
	zIndex: -1,
	backgroundSize: 'cover',
	backgroundColor: 'black',
	backgroundRepeat: 'no-repeat'
}} />
<Container>
<div>
	<h5>{singleMovie.title}</h5>
	<p>{singleMovie.overview}</p>
	<p>{showActors}</p>
</div>
</Container> */
export default Movie