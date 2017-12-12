import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';

const Header = () => {
  return (
    <nav>
      <h1>DevPool</h1>
      <ul>
        <NavLink to="/blog" className="nav-section">
          <li className="home-link link">
              Home
          </li>
        </NavLink>
        <NavLink to="/suggestions" className="nav-section">
          <li className="home-link link">
              Suggestions & Feedback
          </li>
        </NavLink>
        <NavLink to="/signup" className="nav-section">
          <li className="home-link link">
              Home
          </li>
        </NavLink>
      </ul>
    </nav>
  )
}

export default Header;
