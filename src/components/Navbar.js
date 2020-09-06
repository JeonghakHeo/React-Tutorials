import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

// withRouter is a higher order component, giving Navbar a supercharge
// Because Navbar is not wrapped in <Route /> in App.js 
// it doesn't have object like history if looked up on console
// Therefore props.history.push didn't work without "withRouter"
const Navbar = (props) => {
  console.log(props)
  // setTimeout(() => {
  //   props.history.push('/about')
  // }, 2000)
  return(
    <nav className="nav-wrapper red darken-3">
      <div className="container">
        <a className="brand-log">Poke'Times</a>
        <ul className="right">
          <li><Link to="/">Home</Link></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}

export default withRouter(Navbar)