const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../db");
const sequelizeInstance = db.Sequelize;
class Review extends Model {}

Reviews.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "users", // table name
      key: "id",
    },
    onDelete: "CASCADE",
  },
  property_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "properties", // table name
      key: "id",
    },
    onDelete: "CASCADE",
  },
  rating: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 1,
      max: 5,
    },
  },
  comment: {
    type: DataTypes.TEXT,
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  sequelize: sequelizeInstance,
  modelName: "review",
  timestamps: true,
  freezeTableName: true,
});

module.exports = Review;
