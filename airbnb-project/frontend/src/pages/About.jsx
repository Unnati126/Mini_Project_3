import { useState } from 'react';

function About() {
  const [name, setName] = useState('');
  const [rating, setRating] = useState('');
  const [reviews, setReviews] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && rating) {
      setReviews([...reviews, { name, rating }]);
      setName('');
      setRating('');
    }
  };

  return (
    <div style={{
      backgroundColor: 'white',
      //color: 'black',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '40px',
      textAlign: 'center'
    }}>
      <h2>About Airbnb Listings</h2>
      <p style={{ maxWidth: '800px' }}>
        Airbnb is a global online marketplace that connects travelers with hosts offering unique places to stay. Whether you're
        looking for a cozy apartment, a seaside villa, or a mountain cabin, Airbnb listings cater to all kinds of travel experiences.
      </p>
      
      <h2 style={{ marginTop: '40px' }}>Rate Your Experience</h2>
      <form
        onSubmit={handleSubmit}
        style={{
          marginBottom: '20px',
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
          color: 'black',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '10px',
          maxWidth: '350px',
          width: '100%'
        }}
      >
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required style={{ width: '50%' }}/>

        <input
          type="number"
          placeholder="Rating (1-5)"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          min="1"
          max="5"
          required style={{ width: '50%' }}/>

        <button type="submit" style={{ padding: '8px', backgroundColor: '#ff5a5f', color: 'white', border: 'none', borderRadius: '4px' }}>Submit</button>
        </form>

      {reviews.length > 0 && (
        <div style={{ maxWidth: '500px' }}>
          <h2>User Reviews</h2>
          <ul style={{ listStyle: 'none', padding: 10 }}>
            {reviews.map((r, i) => (
              <li key={i} style={{ marginBottom: '10px' }}>
                <strong>{r.name}:</strong> {r.rating} ⭐
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default About;