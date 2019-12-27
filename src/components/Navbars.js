import React from 'react'
import {
    BrowserRouter as Router,
    Route, Link
} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilm, faCodeBranch  } from '@fortawesome/free-solid-svg-icons'
import { Navbar } from 'react-bootstrap'

const Navbars = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Link to="/">
                    <Navbar.Brand href="#home">
                        <FontAwesomeIcon icon={faFilm} />{' '}
                        React Movie Database App
                </Navbar.Brand>
                </Link>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Brand href="https://github.com/Elvaleryn/noreduxmovieapp">
                        <FontAwesomeIcon icon={faCodeBranch} style={{marginRight: '5px'}}/>Github Repo 
                    </Navbar.Brand>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Navbars;