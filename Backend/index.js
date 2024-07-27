const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

// Define a route for the root URL
app.get('/', (req, res) => {
  res.send('Welcome to the MERN Clinic Backend!');
});

// Example API endpoint
app.get('/api/test', (req, res) => {
  res.json({ message: 'API is working!' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
