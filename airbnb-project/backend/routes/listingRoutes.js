const express = require('express');
const router = express.Router();
const pool = require('../db');

// Get all listings
router.get('/', async (req, res) => {
    const [rows] = await pool.query('SELECT * FROM listings');
    res.json(rows);
});

// Add new listing
router.post('/', async (req, res) => {
const { user_id, title, description, address, city, country, price_per_night } = req.body;
  const [result] = await pool.query(
    'INSERT INTO listings (user_id, title, description, address, city, country, price_per_night, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, NOW())',
    [user_id, title, description, address, city, country, price_per_night]
  );
  res.json({ id: result.insertId });
});

// Update a listing
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { title, description, address, city, country, price_per_night } = req.body;
  await pool.query(
    'UPDATE listings SET title=?, description=?, address=?, city=?, country=?, price_per_night=? WHERE id=?',
    [title, description, address, city, country, price_per_night, id]
  );
  res.sendStatus(200);
});

// Delete a listing
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  await pool.query('DELETE FROM listings WHERE id=?', [id]);
  res.sendStatus(204);
});

module.exports = router;














/*const express = require('express');
const router = express.Router();
const { getAllListings } = require('../controllers/listingController');

// Route to get all listings
router.get('/', getAllListings);

module.exports = router;*/