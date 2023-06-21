const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const { Pool } = require('pg');

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
    createUser(First_Name: String, Last_Name: String, Date_of_Birth: String, Email: String, Password: String): User!
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
            const client = await pool.connect();
            const result = await client.query(
                'INSERT INTO user_info (First_Name, Last_Name, Date_of_Birth, Email, Password) VALUES ($1, $2, $3, $4, $5) RETURNING *',
                [First_Name, Last_Name, Date_of_Birth, Email, Password]
            );
            client.release();

            return result.rows[0];
        },
    },
};

const startServer = async () => {
    const server = new ApolloServer({ typeDefs, resolvers });

    await server.start();
    server.applyMiddleware({ app });

    const port = 4000;
    app.listen(port, () => {
        console.log(`Server running on http://localhost:${port}${server.graphqlPath}`);
    });
};

startServer().catch((err) => console.error('Error starting server:', err));