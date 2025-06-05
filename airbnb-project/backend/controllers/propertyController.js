const { Property } = require("../models");

// GET /properties
async function getAllProperties(req, res) {
  try {
    const properties = await Property.findAll();
    res.status(200).json(properties);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
}

// GET /properties/:id
async function getPropertyById(req, res) {
  const id = parseInt(req.params.id);
  try {
    const property = await Property.findByPk(id);
    if (property) {
      res.status(200).json(property);
    } else {
      res.status(404).json({ message: "Property not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
}

// POST /properties
async function createProperty(req, res) {
  try {
    const newProperty = await Property.create({
      user_id: 1,
      title: req.body.title,
      description: "",
      address: req.body.address,
      city: req.body.city,
      country: req.body.country,
      price_per_night: req.body.price_per_night,
    });
    res.status(201).json(newProperty);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
}

// PUT /properties/:id
async function updateProperty(req, res) {
  const id = parseInt(req.params.id);
  try {
    const property = await Property.findByPk(id);
    if (!property) {
      // Create new property if not found
      const newProperty = await Property.create({ id, ...req.body });
      return res.status(201).json(newProperty);
    }

    await property.update(req.body);
    res.status(200).json(property);
  } catch (error) {
    res.status(400).json({ message: "Failed to update property", error });
  }
}

// DELETE /properties/:id
async function deleteProperty(req, res) {
  const id = parseInt(req.params.id);
  try {
    const property = await Property.findByPk(id);
    if (!property) {
      return res.status(404).json({ message: "Property not found" });
    }

    await property.destroy();
    res.status(200).json(property);
  } catch (error) {
    res.status(500).json({ message: "Failed to delete property", error });
  }
}

module.exports = {
  getAllProperties,
  getPropertyById,
  createProperty,
  updateProperty,
  deleteProperty,
};
