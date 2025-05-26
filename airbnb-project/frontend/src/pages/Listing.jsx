import React from 'react';

const listings = [
  {
    id: 1,
    guestName: 'John Doe',
    members: 2,
    days: 3
  },
  {
    id: 2,
    guestName: 'Alice Smith',
    members: 4,
    days: 5
  }
];

function Listing() {
  return (
    <div style={{ padding: '2rem' }}>
      <h2>Available Listings</h2>
      {listings.map((listing) => (
        <div key={listing.id} style={{
          marginBottom: '1rem',
          padding: '1rem',
          border: '1px solid #ccc',
          borderRadius: '10px'
        }}>
          <p><strong>Guest:</strong> {listing.guestName}</p>
          <p><strong>Members:</strong> {listing.members}</p>
          <p><strong>Duration:</strong> {listing.days} days</p>
        </div>
      ))}
    </div>
  );
}

export default Listing;



/*import React, { useEffect, useState } from 'react';
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

export default Listings;*/