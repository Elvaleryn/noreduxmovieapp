import React from 'react'
import actorsService from '../services/actors'
import moviesService from '../services/movies'
import { useState, useEffect } from 'react'
import { Card, Container, Row, Col, CardGroup, Badge } from 'react-bootstrap'

const Movie = ({ ids }) => {

  const [actors, setActors] = useState([])
  const [crew, setCrew] = useState([])
  const [genres, setGenres] = useState([])
  const [singleMovie, setSingleMovie] = useState([])

  //FETCH DATA
  useEffect(() => {
    moviesService.getSingleMovie(ids.id)
      .then(response => {
        setSingleMovie(response.data)
      })
  }, [ids.id])

  useEffect(() => {
    moviesService.getSingleMovie(ids.id)
      .then(response => {
        setGenres(response.data.genres)
      })
  }, [ids.id])

  useEffect(() => {
    actorsService.getActors(ids.id)
      .then(response => {
        setActors(response.data.cast)
      })
  }, [ids.id])

  useEffect(() => {
    actorsService.getActors(ids.id)
      .then(response => {
        setCrew(response.data.crew)
      })
  }, [ids.id])


  //Image urls
  const imgURL = 'https://image.tmdb.org/t/p/w185'
  const fullSize = 'https://image.tmdb.org/t/p/w1280'
  const mediumSize = 'https://image.tmdb.org/t/p/w300'

  const background = `${fullSize}/${singleMovie.poster_path}`
  const cardImage = `${mediumSize}/${singleMovie.poster_path}`

  //style
  const backgroundRow = {
    backgroundColor: 'rgba(0, 0, 0, 0.7)'
  }
  const backgroundContainer = {
    backgroundImage: `url(${background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    position: 'relative',
    height: '%100'
  }


  const getDurationStr = mins => {
    let h = Math.floor(mins / 60);
    let m = mins % 60;
    m = m < 10 ? "0" + m : m;
    return `${h} hours ${m} minutes`;
  };
  //director
  const director = crew.filter(a => a.job === 'Director')

  //genres
  const movieGenres = genres.map(g =>
    <Badge variant="warning" className="ml-1" key={`g${g.id}`}>
      {g.name}
    </Badge>)
  console.log(movieGenres);
  

  //ACTORS
  const showActors = actors.map(actor =>
    <Col xs={12} sm={6} md={3} lg={3} xl={3}>
      <CardGroup style={{ marginBottom: '3rem' }}>
        <Card className="bg-dark text-white" border="dark" style={{ width: '18rem' }, { height: '32rem' }}>
          <Card.Img variant="top" src={imgURL + actor.profile_path} alt='movie poster' style={{ height: '24rem' }} />
          <Card.Body>
            <Card.Title>{actor.name}</Card.Title>
            <i>{actor.character}</i>
          </Card.Body>
        </Card>
      </CardGroup>
    </Col>
  )

  return (
    <>
      <Container style={backgroundContainer} className="container-fluid text-white">
        <Row style={backgroundRow}>
          <Col lg={4}>
            <img src={cardImage} />
          </Col>
          <Col lg={8}>
            <h3 style={{ marginTop: '10px' }}>{singleMovie.title}</h3>
            <h5 style={{ marginTop: '20px' }}>Overview</h5>
            <p>{singleMovie.overview}</p>
            <h5>Genres</h5>
            {movieGenres}
            <h5 style={{ marginTop: '20px' }}>IMDB Rating:</h5>
            <p>{singleMovie.vote_average}</p>
            <h5>Director</h5>
            {director.map(d => <p>{d.name}</p>)}
            <h5>Duration</h5>
            <p>{getDurationStr(singleMovie.runtime)}</p>
          </Col>
        </Row>
      </Container>
      <Container classname="container-fluid text-white">
        <h3>Actors</h3>
        <Row>
          {showActors}
        </Row>
      </Container>
    </>
  )
}


export default Movie