const User = require("./user")(sequelize, DataTypes);
const Property = require("./property")(sequelize, DataTypes);
const Review = require("./review")(sequelize, DataTypes);

User.hasMany(Review, { foreignKey: "user_id", onDelete: "CASCADE" });
Review.belongsTo(User, { foreignKey: "user_id", onDelete: "CASCADE" });

Property.hasMany(Review, { foreignKey: "property_id", onDelete: "CASCADE" });
Review.belongsTo(Property, { foreignKey: "property_id", onDelete: "CASCADE" });

async function init() {
  await User.sync();
  await Property.sync();
  await Review.sync(); 
  //sync models here
}
init();
module.exports = {
  User, Property, Review
  //export models here
};


