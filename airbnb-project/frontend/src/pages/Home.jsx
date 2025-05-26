import React from 'react';
import bgImage from '../assets/airbnb1.jpeg';

function Home() {
  const styles = {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    fontSize: '2rem',
    textAlign: 'center',
  };

  return (
    <div style={styles}>
      <h1>Welcome to Airbnb</h1>
      <p>Find amazing places to stay.</p>
    </div>
  );
}

export default Home;