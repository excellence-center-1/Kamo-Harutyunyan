const express = require('express');
const { Pool } = require('pg');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const cors = require('cors');

const app = express();
const port = 4000;

const pool = new Pool({
  user: 'myuser',
  host: 'localhost',
  database: 'mydb2',
  password: 'mypass',
  port: 5432,
});

app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  const token = req.headers['authorization'];

  if (token) {
    jwt.verify(token, secretKey, (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: 'Invalid token' });
      } else {
        req.user = decoded;
        next();
      }
    });
  } else {
    res.status(401).json({ message: 'Token missing' });
  }
});


app.post('/login', (req, res) => {
  const { username, password } = req.body;

  pool.query(
    'SELECT * FROM your_table WHERE username = $1',
    [username],
    (error, result) => {
      if (error) {
        console.error('Error executing query', error);
        res.status(500).send('Error retrieving data');
      } else {
        if (result.rows.length === 0) {
          res.status(401).json({ message: 'Invalid user or password' });
        } else {
          const user = result.rows[0];
          if (user.password === password) {
            const token = jwt.sign({ username }, secretKey);
            res.json({ token });
          } else {
            res.status(401).json({ message: 'Invalid user or password' });
          }
        }
      }
    }
  );
});



app.post('/signup', async (req, res) => {
  const { email, username, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const insertQuery =
      'INSERT INTO "user" (email, username, password) VALUES ($1, $2, $3)';
    await pool.query(insertQuery, [email, username, hashedPassword]);

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'User registration failed', error: error.message });
  }
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
