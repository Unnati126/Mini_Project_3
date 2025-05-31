const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../db");
const sequelizeInstance = db.Sequelize;
class Property extends Model {}

Properties.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "users", // refers to table name, not model name
      key: "id",
    },
    onDelete: "CASCADE",
  },
  title: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
  address: {
    type: DataTypes.STRING(255),
  },
  city: {
    type: DataTypes.STRING(100),
  },
  country: {
    type: DataTypes.STRING(100),
  },
  price_per_night: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  sequelize: sequelizeInstance,
  modelName: "property",
  timestamps: true,
  freezeTableName: true,
});

module.exports = Property;
