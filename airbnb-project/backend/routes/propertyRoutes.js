const express = require('express');
const router = express.Router();
const propertyController = require('../controllers/propertyController');

router.get('/', async (req, res) => {
  try {
    const properties = await propertyController.getAllProperties();
    res.status(200).json(properties);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const property = await propertyController.getPropertyById(parseInt(req.params.id));
    if (!property) return res.status(404).json({ message: 'Property not found' });
    res.status(200).json(property);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

router.post('/', async (req, res) => {
  try {
    const propertyData = {
      user_id: 1, // hardcoded, replace later with actual user
      title: req.body.title,
      description: "",
      address: req.body.address,
      city: req.body.city,
      country: req.body.country,
      price_per_night: req.body.price_per_night,
    };

    const newProperty = await propertyController.createProperty(propertyData);
    res.status(201).json(newProperty);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const updated = await propertyController.updateProperty(parseInt(req.params.id), req.body);
    if (!updated) {
      const created = await propertyController.createProperty({ id: parseInt(req.params.id), ...req.body });
      return res.status(201).json(created);
    }
    res.status(200).json(updated);
  } catch (error) {
    res.status(400).json({ message: 'Failed to update property', error });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const deleted = await propertyController.deleteProperty(parseInt(req.params.id));
    if (!deleted) return res.status(404).json({ message: 'Property not found' });
    res.status(200).json(deleted);
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete property', error });
  }
});

module.exports = router;