import React from 'react';

function About() {
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
    textAlign: 'center',
    padding: '2rem',
  };

  return (
    <div style={containerStyle}>
      <div>
        <h2>About Us</h2>
        <p>
          We connect travelers with local hosts, offering authentic experiences
          and comfortable stays across the globe.
        </p>
      </div>
    </div>
  );
}

export default About;





/*const About = () => {
  return (
    <div style={{ padding: '1rem' }}>
      <h1>About This Project</h1>
      <p>This project showcases a dashboard for analyzing Airbnb listing data.</p>
    </div>
  );
};

export default About;*/