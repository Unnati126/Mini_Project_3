const { Property } = require('../models');

async function getAllProperties() {
  return await Property.findAll();
}

async function getPropertyById(id) {
  return await Property.findByPk(id);
}

async function createProperty(data) {
  return await Property.create(data);
}

async function updateProperty(id, data) {
  const property = await Property.findByPk(id);
  if (!property) return null;
  await property.update(data);
  return property;
}

async function deleteProperty(id) {
  const property = await Property.findByPk(id);
  if (!property) return null;
  await property.destroy();
  return property;
}

module.exports = {
  getAllProperties,
  getPropertyById,
  createProperty,
  updateProperty,
  deleteProperty,
};
