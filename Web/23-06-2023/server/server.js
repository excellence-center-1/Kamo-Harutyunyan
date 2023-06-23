const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const { Pool } = require('pg');


const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const fs = require("fs");
const https = require("https");
const app = express();

const pool = new Pool({
  user: 'myuser',
  host: 'localhost',
  database: 'mydb',
  password: 'mypass',
  port: 5432, // Default PostgreSQL port
});


const typeDefs = gql`
  type User {                                 
    first_name: String
    last_name: String
    date_of_birth: String
    email: String
    password: String
  }

  type Query {
    user_info: [User!]!
  }

  type Mutation {
    createUser(first_name: String, last_name: String, date_of_birth: String, email: String, password: String): User!
    loginUser(email: String, password: String): Token!
  }

  type Token {
    token: String
  }
`;


const resolvers = {
  Query: {
    user_info: async () => {
      const client = await pool.connect();
      const result = await client.query('SELECT * FROM user_info');
      client.release();

      return result.rows;
    },
  },
  Mutation: {
    createUser: async (_, { first_name, last_name, date_of_birth, email, password }) => {
      const hashed_password = await bcrypt.hash(password, 10);
      const client = await pool.connect();
      const result = await client.query(
        'INSERT INTO user_info (first_name, last_name, date_of_birth, email, password) VALUES ($1, $2, $3, $4, $5) RETURNING *',
        [first_name, last_name, date_of_birth, email, hashed_password]
      );
      client.release();

      return result.rows[0];
    },
    loginUser: async (_, { email, password }) => {
      const client = await pool.connect();
      const result = await client.query('SELECT * FROM user_info WHERE email = $1', [email]);
      client.release();

      if (result.rows.length === 0) {
        throw new Error('Invalid user or password');
      }
      else if (!(await bcrypt.compare(password, result.rows[0].password))) {
        throw new Error('Invalid user or password');
      }

      const token = jwt.sign({ userId: result.rows[0].User_id }, 'your-secret-key', { expiresIn: '1h' });

      return { token };
    },
  },
};


const options = {
  key: fs.readFileSync("./server.key"),
  cert: fs.readFileSync("./server.cert"),
};


 const startServer = async () => {
  const server = new ApolloServer({ typeDefs, resolvers });

  await server.start();
  server.applyMiddleware({ app });

  const httpsServer = https.createServer(options, app);

  const port = 4000;

  httpsServer.listen(port, () => {
    console.log(`Server running on https://localhost:${port}${server.graphqlPath}`);
  });
};

startServer().catch((err) => console.error('Error starting server:', err));