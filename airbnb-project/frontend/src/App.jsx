import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Listing from './pages/Listing';
import About from './pages/About';
import Navbar from './components/Navbar';
import { ListingProvider } from './context/ListingContext';
import { ListingFormProvider } from './context/ListingFormContext';

function App() {
  return (
    <ListingProvider>  
      <ListingFormProvider>     
      <Router>
        <Navbar />
        <div style={{ paddingTop: '80px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/listing" element={<Listing />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
      </ListingFormProvider>
    </ListingProvider>
  );
}

export default App;