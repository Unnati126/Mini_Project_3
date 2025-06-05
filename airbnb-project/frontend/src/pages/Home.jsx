import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: '', 
    password: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/login', loginData);

      const { token } = res.data;

      localStorage.setItem('accessToken', token);

      navigate('/listing');
    } catch (err) {
      setError('Invalid login credentials');
      console.error('Login error:', err);
    }
  };

  return (
    <div className="home-container">
      <form onSubmit={handleSubmit} className="home-form">
        <h2>Login to Airbnb</h2>

        {error && <p style={{ color: 'red' }}>{error}</p>}

        <label>Email:</label> {}
        <input
          type="email"
          name="email" 
          value={loginData.email}
          onChange={handleChange}
          required
        />

        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={loginData.password}
          onChange={handleChange}
          required
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Home;
