const { DataTypes, sequelize } = require("sequelize");
const Sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "Review",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "users", // name of the table, not the model
          key: "id",
        },
        onDelete: "CASCADE",
      },
      property_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "properties", // name of the table
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
    },
    {
      tableName: "reviews",
      modelName: "Review",
      timestamps: true,
      createdAt: "created_at",
      updatedAt: false,
    }
  );
};
