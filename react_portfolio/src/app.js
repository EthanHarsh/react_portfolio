import React, { useState } from 'react';
import { QUERY_PROJECTS } from './utils/queries';
import NavBar from "./components/NavBar/index";
import HomePage from "./pages/home"
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

const mainStyle = {
  position: 'absolute',
  left: '0px',
  top: '0px',
  width: '100vw',
  height: '100vh'
}

function App() {
  return (
    <ApolloProvider client={client}>
    <main style={mainStyle}>
      <NavBar></NavBar>    
      <HomePage></HomePage>
    </main>
    </ApolloProvider>
  );
}

export default App;
