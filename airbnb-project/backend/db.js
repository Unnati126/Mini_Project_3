const mysql = require('mysql');
require('dotenv').config();

// Create a connection to the database
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

module.exports = pool.promise(); // Export the promise-based pool for use in async/await