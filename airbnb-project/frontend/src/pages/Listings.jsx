import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Listings = () => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/listings')
      .then(res => setListings(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ padding: '1rem' }}>
      <h2>All Listings</h2>
      <ul>
        {listings.map(listing => (
          <li key={listing.id}>
            {listing.name} - {listing.city} - ${listing.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Listings;
