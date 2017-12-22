import React from 'react';
import '../styles/scss/Header.scss'
import { NavLink, Redirect } from 'react-router-dom';

const Header = ({ type }) => {

  return (
    <nav className={type}>
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
        <NavLink to="/login" className="nav-section">
          <li className="login-link link">
              Sign In
          </li>
        </NavLink>
      </ul>
    </nav>
  )
}

export default Header;
