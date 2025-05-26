/*const getAllListings = async (_req, res) => {
    const listings = [
        {   id: 1,
            name: "Cozy Loft",
            price: 120, 
        },
        {
            id: 2,
            name: "Beach House",
            price: 250,
        }
    ];
    res.json(listings);
};*/

const db = require('../db');

const getAllListings = async (_req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM listings');
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { getAllListings };