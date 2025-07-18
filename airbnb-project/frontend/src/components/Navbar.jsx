import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const navStyle = {
    background: '#ff5a5f',
    padding: '1rem',
    display: 'flex',
    justifyContent: 'right',
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: 1000,
  };

  const linkStyle = {
    color: 'white',
    margin: '0 1.5rem',
    fontSize: '1.3rem',
    textDecoration: 'none',
    fontWeight: 'bold',
  };

  return (
    <nav style={navStyle}>
      <Link to="/" style={linkStyle}>HOME</Link>
      <Link to="/listing" style={linkStyle}>LISTING</Link>
      <Link to="/about" style={linkStyle}>ABOUT</Link>
    </nav>
  );
}

export default Navbar;