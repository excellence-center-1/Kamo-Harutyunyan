// server.js

const express = require('express');
const app = express();
const pool = require('./db');
const cors = require('cors');
const bcrypt = require('bcrypt');
app.use(express.json());
app.use(cors());

app.get('/tasks', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM tasks');
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/createtask', async (req, res) => {
  const { name, description, priority} = req.body;
  try {
    const insertQuery =
      'INSERT INTO tasks (name, description, priority) VALUES ($1, $2, $3)';
    await pool.query(insertQuery, [name, description, priority]);
    res.status(200).json({ message: 'Task added successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Task adding failed', error: error.message });
  }
});

// Registration endpoint
app.post('/register', async (req, res) => {
  const { firstName, lastName, date_of_birth, email, password} = req.body;
  try {
    const insertQuery =
      'INSERT INTO persons (first_name, last_name, date_of_birth, email, password) VALUES ($1, $2, $3, $4, $5)';
    await pool.query(insertQuery, [firstName, lastName, date_of_birth, email, password]);
    res.status(200).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'User registration failed', error: error.message });
  }
});
// Login endpoint
app.put('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const queryResult = await pool.query('SELECT id, password FROM persons WHERE email = $1', [email]);
    const user = queryResult.rows[0];

    if (user) {
      bcrypt.compare(password, user.password, (bcryptError, bcryptResult) => {
        if (bcryptError) {
          throw bcryptError;
        }
        if (bcryptResult) {
          const userId = user.id;

          res.status(200).send({
            message: 'You are logined',
            userId: userId
          });
        } else {
          res.status(401).send('Invalid email or password');
        }
      });
    } else {
      res.status(401).json({ error: 'Invalid credentials' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
const PORT =  4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});