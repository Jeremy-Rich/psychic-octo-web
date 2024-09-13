const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware (Optional: Add if needed)
app.use(express.json());

// Sample route
app.get('/', (req, res) => {
  res.send('Welcome to the Psychic-Octo-Web server!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});