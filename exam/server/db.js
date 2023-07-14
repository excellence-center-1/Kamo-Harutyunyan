const { Pool } = require('pg');
const pool = new Pool({
    user: 'myuser',
    host: 'localhost',
    database: 'trello',
    password: 'mypass',
    port: 5432, // or your PostgreSQL port
  });

module.exports = pool;
