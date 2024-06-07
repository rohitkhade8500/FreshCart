import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar(props) {
  const { active } = props;
  return (
    <nav className={`navbar ${active ? 'active' : ''}`}>
      <Link to="/">home</Link>
      <Link to="/features">features</Link>
      <Link to="/categories">categories</Link>
      <Link to="/reviews">reviews</Link>
      <Link to="/blogs">blogs</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </nav>
  );
}

Navbar.propTypes = {
  active: PropTypes.bool.isRequired,
};
