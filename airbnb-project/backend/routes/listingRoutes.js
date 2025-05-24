const express = require('express');
const router = express.Router();
const { getAllListings } = require('../controllers/listingController');

// Route to get all listings
router.get('/', getAllListings);

module.exports = router;