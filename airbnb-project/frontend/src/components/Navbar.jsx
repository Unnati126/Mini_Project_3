import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ padding: '1rem', backgroundColor: '#eee' }}>
      <Link to="/">Home</Link> | <Link to="/listings">Listings</Link> | <Link to="/about">About</Link>
    </nav>
  );
};

export default Navbar;