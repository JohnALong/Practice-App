import React, { Component } from 'react';
import { Link } from "react-router-dom"

class NavBar extends Component {

  render(){

    return (
      <header>
        <h1 className="site-title">Practice App<br />
          <small>Doing it now so the next time is easier</small>
        </h1>
        <nav>
          <ul className="container">
            <li><Link className="nav-link" to="/">Home</Link></li>
            <li><Link className="nav-link" to="/practices">Practices</Link></li>
            <li>Locations</li>
            <li>Employees</li>
            <li>Owners</li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default NavBar;