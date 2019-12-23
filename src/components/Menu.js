import React from 'react';
import {
  BrowserRouter as Router,
  Route, Link
} from 'react-router-dom'

const Menu = () => {
  const padding = {
    paddingRight: 5
  }
  return (
    <div>
      <Link style={padding} to="/popular">popular</Link>
      <Link style={padding} to="/search">search</Link>
    </div>
  )
}
export default Menu