import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Favorite from './pages/Favorite';
import Home from './pages/Home';
import Navbar from './components/Navbar'
import Details from './pages/Details';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

function App() {
  const client = new ApolloClient({
    uri: 'https://graphql-pokeapi.vercel.app/api/graphql',
    cache: new InMemoryCache()
  });

  return (
    <ApolloProvider client={client}>
      <Router>
        <Navbar />
        <Route path="/" exact component={Home}></Route>
        <Route path="/favorite" exact component={Favorite}></Route>
        <Route path="/details/:url" exact component={Details}></Route>
      </Router>
    </ApolloProvider>
  );
}

export default App;
