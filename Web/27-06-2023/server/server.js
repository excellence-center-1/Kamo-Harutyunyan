const express = require('express');
const { Pool } = require('pg');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const app = express();
const port = 4000;

const secretKey = crypto.randomBytes(32).toString('hex');

const pool = new Pool({
    user: 'myuser2',
    host: 'localhost',
    database: 'mydb',
    password: 'mypass',
    port: 5432, 
});

app.use(express.json());

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


app.post('/api/login', (req, res) => {
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
            res.status(401).json({ message: 'Invalid user or password'});
          } else {
            const user = result.rows[0];
            if (user.password === password) {
              const token = jwt.sign({ username }, secretKey);
              res.json({ token });
            } else {
              res.status(401).json({ message: 'Invalid user or password'});
            }
          }
        }
      }
    );
  });
  


app.post('/api/signup', (req, res) => {
    const { email, username, password } = req.body;

    pool.query(
        'INSERT INTO your_table (email, username, password) VALUES ($1, $2, $3)',
        [email, username, password],
        (error, result) => {
            if (error) {
                console.error('Error executing query', error);
                res.status(500).send('Error inserting data');
            } else {
                console.log('Data inserted successfully');
                res.status(200).send('Data inserted successfully');
            }
        }
    );
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
