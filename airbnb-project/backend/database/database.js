require("dotenv").config();
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, "", {
  host: process.env.DB_HOST,
  dialect: "mysql",
});
const connectMysql = async () => {
  try {
    await sequelize.authenticate();
    console.log(`Successful connection to MySQL Database
${process.env.DB_NAME}`);
  } catch (error) {
    console.error("Unable to connect to MySQL database:", error);
    process.exit(1);
  }
};
connectMysql();

module.exports = sequelize;