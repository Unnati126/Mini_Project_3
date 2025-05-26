import { useState } from 'react';

function Home() {
  const [formData, setFormData] = useState({
    name: '',
    checkin: '',
    checkout: '',
    members: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Welcome, ${formData.name}!`);
    setFormData({ name: '', checkin: '', checkout: '', members: '' });
  };

  return (
    <div style={{
      backgroundColor: 'white',
      color: 'black',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px',
      textAlign: 'center'
    }}>
      <h2>Welcome to Airbnb</h2>
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '15px',
          maxWidth: '350px',
          width: '100%',
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 0 10px rgba(0,0,0,0.1)',
          color: 'black'
        }}
      >

        <div style={{ textAlign: 'left' }}>
          <label>Name:</label>
          <input name="name" type="text" value={formData.name} onChange={handleChange} required style={{ width: '100%' }} />
        </div>
        
        <div style={{ textAlign: 'left' }}>
          <label>Check-in Date:</label>
          <input name="checkin" type="date" value={formData.checkin} onChange={handleChange} required style={{ width: '100%' }} />
        </div>

        <div style={{ textAlign: 'left' }}>
          <label>Check-out Date:</label>
          <input name="checkout" type="date" value={formData.checkout} onChange={handleChange} required style={{ width: '100%' }} />
        </div>

        <div style={{ textAlign: 'left' }}>
          <label>Guests:</label>
          <input name="guests" type="number" value={formData.guests} onChange={handleChange} required style={{ width: '100%' }} />
        </div>

        <button type="submit" style={{ padding: '8px', backgroundColor: '#ff5a5f', color: 'white', border: 'none', borderRadius: '4px' }}>Submit</button>
      </form>
    </div>
  );
}

export default Home;







/*import { useState } from 'react';

function Home() {
  const [formData, setFormData] = useState({
    name: '',
    checkin: '',
    checkout: '',
    members: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Welcome, ${formData.name}!`);
    setFormData({ name: '', checkin: '', checkout: '', members: '' });
  };

  return (
    <div style={{
      backgroundColor: 'white',
      color: 'black',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '50px',
      textAlign: 'center'
    }}>
      <h2>Welcome to Airbnb</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '300px', width: '100%' }}>
        <input name="name" type="text" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
        <input name="checkin" type="date" placeholder="Check-in" value={formData.checkin} onChange={handleChange} required />
        <input name="checkout" type="date" placeholder="Check-out" value={formData.checkout} onChange={handleChange} required />
        <input name="members" type="number" placeholder="No. of Members" value={formData.members} onChange={handleChange} required min="1" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Home;*/