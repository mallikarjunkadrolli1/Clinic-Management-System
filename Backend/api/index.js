const express = require('express');
const cors = require('cors');
require('dotenv').config(); // Load environment variables
require('../Config/db'); // Import and initialize database

const apiRoutes = require('../Routes/api.routes');
const app = express();
const port = process.env.PORT || 3000;

// Middlewares
app.use(cors({ origin: "*" }));
app.use(express.json());

// API route
app.use('/api', apiRoutes);

app.listen(port, () => {
  console.log("This is the server");
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
