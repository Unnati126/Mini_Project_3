const express = require('express');
const cors = require("cors");
const propertyRouter = require("./routes/propertyRoutes");
const loginRouter = require("./api/login"); 
const registerRouter = require('./api/register');
require('dotenv').config();

const app = express(); 

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/properties", propertyRouter);
app.use("/api/login", loginRouter); 
app.use("/api/register", registerRouter);

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
