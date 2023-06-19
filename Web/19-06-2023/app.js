const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const app = express();
const port = 3001

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Middleware to parse JSON requests
app.use(express.json());

app.get('/users', (req, res) => {
  res.status(200).json({ message: 'Get all users' });
});

app.post('/users', (req, res) => {
  const user = req.body;
  res.status(201).json({ message: 'User created successfully' });
});

app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  if (userId) {
    res.status(200).json({ message: `Get user with ID: ${userId}` });
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

app.put('/users/:id', (req, res) => {
  const userId = req.params.id;
  if (userId) {
    res.status(200).json({ message: `Update user with ID: ${userId}` });
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

// Route: Delete a specific user
app.delete('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Delete the user with the specified ID from the database or perform other necessary actions
  if (userId) {
    res.status(200).json({ message: `Delete user with ID: ${userId}` });
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
