const propertyService = require('../services/propertyService');

async function getAllProperties() {
  return await propertyService.getAllProperties();
}

async function getPropertyById(id) {
  return await propertyService.getPropertyById(id);
}

async function createProperty(propertyData) {
  return await propertyService.createProperty({
    user_id: 1, // default or placeholder user ID
    title: propertyData.title,
    description: "", 
    address: propertyData.address,
    city: propertyData.city,
    country: propertyData.country,
    price_per_night: propertyData.price_per_night,
  });
}

async function updateProperty(id, propertyData) {
  return await propertyService.updateProperty(id, propertyData);
}

async function deleteProperty(id) {
  return await propertyService.deleteProperty(id);
}

module.exports = {
  getAllProperties,
  getPropertyById,
  createProperty,
  updateProperty,
  deleteProperty,
};