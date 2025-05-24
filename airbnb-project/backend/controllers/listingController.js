const getAllListings = async (_req, res) => {
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
};

module.exports = { getAllListings };