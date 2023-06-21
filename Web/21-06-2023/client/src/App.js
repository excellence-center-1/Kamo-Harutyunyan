import React, { useState } from 'react';
import Login from './Login';
import Signup from './Signup';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql', // Replace with the server's GraphQL endpoint
  cache: new InMemoryCache(),
});

const App = () => {
  const [currentPage, setCurrentPage] = useState('login');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <ApolloProvider client={client}>
      <div>
        <div>
          <button onClick={() => handlePageChange('login')}>Login</button>
          <button onClick={() => handlePageChange('signup')}>Sign Up</button>
        </div>
        {currentPage === 'login' ? <Login /> : <Signup />}
      </div>
    </ApolloProvider>
  );
};

export default App;
