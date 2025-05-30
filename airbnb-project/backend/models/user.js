const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../db");
const sequelizeInstance = db.Sequelize;
class User extends Model {}

Users.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true,
  },
  password_hash: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  user_type: {
    type: DataTypes.ENUM("host", "guest"),
    allowNull: false,
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  sequelize: sequelizeInstance,
  modelName: "user",
  timestamps: true,
  freezeTableName: true,
});

module.exports = User;
