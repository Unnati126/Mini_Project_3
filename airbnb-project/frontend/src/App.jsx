import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Listing from './pages/Listing';
import About from './pages/About';
import Navbar from './components/Navbar';
import { ListingProvider } from './pages/ListingContext.jsx';


function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ paddingTop: '80px' }}> {/* Avoid content hiding behind navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/listing" element={<Listing />} />
          <Route path="/about" element={<About />} />
        </Routes>

      <ListingProvider>
      <App />
      </ListingProvider>

      </div>
    </Router>

  );
}

export default App;