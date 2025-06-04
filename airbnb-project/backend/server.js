const express = require('express');
const cors = require("cors");
const propertyRouter = require("./routes/propertyRoutes");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/properties", propertyRouter);

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});