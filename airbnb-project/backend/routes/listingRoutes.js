const express = require('express');
const router = express.Router();
const pool = require('../db'); 

//  Get all listings
router.get('/', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM listings');
    res.json(rows);
  } catch (err) {
    console.error('Error fetching listings:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

//  Add a new listing
router.post('/', async (req, res) => {
  try {
    const { address, city, country, price_per_night } = req.body;

    if (!address || !city || !country || !price_per_night) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    await pool.query(
      'INSERT INTO listings (address, city, country, price_per_night) VALUES (?, ?, ?, ?)',
      [address, city, country, price_per_night]
    );

    res.status(201).json({ message: 'Listing added' });
  } catch (err) {
    console.error('Error adding listing:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

//  Update an existing listing
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { address, city, country, price_per_night } = req.body;

    if (!address || !city || !country || !price_per_night) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    await pool.query(
      'UPDATE listings SET address = ?, city = ?, country = ?, price_per_night = ? WHERE id = ?',
      [address, city, country, price_per_night, id]
    );

    res.json({ message: 'Listing updated' });
  } catch (err) {
    console.error('Error updating listing:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

//  Delete a listing
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query('DELETE FROM listings WHERE id = ?', [id]);
    res.json({ message: 'Listing deleted' });
  } catch (err) {
    console.error('Error deleting listing:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;















/*const express = require('express');
const router = express.Router();
const { getAllListings } = require('../controllers/listingController');

// Route to get all listings
router.get('/', getAllListings);

module.exports = router;*/