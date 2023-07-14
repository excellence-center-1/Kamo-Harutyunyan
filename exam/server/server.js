const express = require('express');
const app = express();
const pool = require('./db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.post('/task', async (req, res) => {
  const { field, description, priority} = req.body;

  try {
    
    const insertQuery =
      'INSERT INTO tasks (field, description, priority) VALUES ($1, $2, $3)';
    await pool.query(insertQuery, [field, description, priority]);

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'User registration failed', error: error.message });
  }
});

// Registration endpoint
app.post('/register', async (req, res) => {
  const { firstName, lastName, date_of_birth, email, password} = req.body;

  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    const insertQuery =
      'INSERT INTO users (first_name, last_name, date_of_birth, email, password) VALUES ($1, $2, $3, $4, $5)';
    await pool.query(insertQuery, [firstName, lastName, date_of_birth, email, hashedPassword]);

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'User registration failed', error: error.message });
  }
});

// Login endpoint
app.post('/login', async (req, res) => {
  
});

const PORT =  4000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});