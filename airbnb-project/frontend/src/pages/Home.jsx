import React from 'react';

function Home() {
  const containerStyle = {
    height: '100vh',
    width: '100%',
    backgroundColor: 'white',
    color: 'black',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '2rem',
    paddingTop: '60px',
    padding: '2rem',
  };

  return (
    <div style={containerStyle}>
      <h2>Welcome to Airbnb</h2>
      <p>Find amazing places to stay.</p>
    </div>
  );
}

export default Home;









/*import React from 'react';
import bgImage from '../assets/airbnb1.jpeg';

function Home() {
  const containerStyle = {
    position: 'relative',
    height: '100vh',
    overflow: 'hidden',
    color: 'white',
    textAlign: 'center',
  };

  const imageStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    opacity: 0.5,
    zIndex: -1,
  };

  const contentStyle = {
    position: 'relative',
    zIndex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    fontSize: '2rem',
  };

  return (
    <div style={containerStyle}>
      <img src={bgImage} alt="Background" style={imageStyle} />
      <div style={contentStyle}>
        <h1>Welcome to Airbnb</h1>
        <p>Find amazing places to stay.</p>
      </div>
    </div>
  );
}

export default Home;*/