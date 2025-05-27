const express = require('express');
const cors = require('cors');
const listingRoutes = require('./routes/listingRoutes');

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/listings', listingRoutes);

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});






/*const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const listingRoutes = require('./routes/listingRoutes');
app.use('/api/listings', listingRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});*/