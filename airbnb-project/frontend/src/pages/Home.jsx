import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/listing'); // Redirect to listing page
  };

  return (
    <div className="home-container">
      <form onSubmit={handleSubmit} className="home-form">
        <h2>Login to Airbnb</h2>
        
        <label>Username:</label>
        <input type="text" name="username" value={loginData.username} onChange={handleChange} required />

        <label>Password:</label>
        <input type="password" name="password" value={loginData.password} onChange={handleChange} required />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Home;








/*import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    checkIn: '',
    checkOut: '',
    members: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/listing'); // Redirect to listing page
  };

  return (
    <div className="home-container">
      <form onSubmit={handleSubmit} className="home-form">
        <h2>Welcome to Airbnb</h2>
        
        <label>Name:</label>
        <input type="text" name="name" onChange={handleChange} required />

        <label>Email:</label>
        <input type="email" name="email" onChange={handleChange} required />

        <label>Check-in Date:</label>
        <input type="date" name="checkIn" onChange={handleChange} required />

        <label>Check-out Date:</label>
        <input type="date" name="checkOut" onChange={handleChange} required />

        <label>Number of Members:</label>
        <input type="number" name="members" onChange={handleChange} required />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Home;*/