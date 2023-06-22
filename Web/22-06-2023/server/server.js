const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const { Pool } = require('pg');

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
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
    First_Name: String
    Last_Name: String
    Date_of_Birth: String
    Email: String
    Password: String
  }

  type Query {
    user_info: [User!]!
  }

  type Mutation {
    createUser(First_Name: String, Last_Name: String, Date_of_Birth: String, Email: String, Password: String): User
    loginUser(Email: String, Password: String): Token!
  }

  type Token {
    token: String!
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
    createUser: async (_, { First_Name, Last_Name, Date_of_Birth, Email, Password }) => {
      const hashed_password = await bcrypt.hash(Password, 10);
      const client = await pool.connect();
      const result = await client.query(
        'INSERT INTO user_info (First_Name, Last_Name, Date_of_Birth, Email, Password) VALUES ($1, $2, $3, $4, $5) RETURNING *',
        [First_Name, Last_Name, Date_of_Birth, Email, hashed_password]
      );
      client.release();

      return result.rows[0];
    },
    loginUser: async (_, { Email, Password }) => {
      const client = await pool.connect();
      const result = await client.query('SELECT * FROM user_info WHERE Email = $1', [Email]);
      client.release();

      if (result.rows.length === 0) {
        throw new Error('Invalid user or password');
      }
      else if (!(await bcrypt.compare(Password, result.rows[0].Password))) {
        throw new Error('Invalid user or password');
      }

      const token = jwt.sign({ userId: result.rows[0].User_id }, 'your-secret-key', { expiresIn: '1h' });

      return { token };
    },
  },
};

passport.use(
  new LocalStrategy({ usernameField: 'Email', passwordField: 'Password' }, async (Email, Password, done) => {
    try {
      const client = await pool.connect();
      const result = await client.query('SELECT * FROM user_info WHERE Email = $1', [Email]);
      client.release();

      if (result.rows.length === 0) {
        return done(null, false, { message: 'Invalid user or password' });
      }
      else if (!(await bcrypt.compare(Password, result.rows[0].Password))) {
        return done(null, false, { message: 'Invalid user or password' });
      }

      return done(null, result.rows[0]);
    } catch (error) {
      return done(error);
    }
  })
);


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