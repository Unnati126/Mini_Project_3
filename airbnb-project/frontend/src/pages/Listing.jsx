import React from 'react';

function Listing() {
  const containerStyle = {
    height: '100vh',
    width: '100%',
    backgroundColor: 'white',
    color: 'black',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '1.5rem',
    paddingTop: '60px',
    padding: '2rem',
  };

  return (
    <div style={containerStyle}>
      <h2>Available Listings</h2>
      <ul>
        <li>Name: John Doe | Guests: 3 | Days: 5</li>
        <li>Name: Sarah Smith | Guests: 2 | Days: 3</li>
        <li>Name: Mike Johnson | Guests: 4 | Days: 7</li>
      </ul>
    </div>
  );
}

export default Listing;








/*import React from 'react';

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

export default Listing;*/