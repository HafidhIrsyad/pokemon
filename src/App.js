import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Navbar from './components/Navbar'
import Details from './pages/Details';
import Favorite from './pages/Favorite';
import Home from './pages/Home';

function App() {
  const client = new ApolloClient({
    uri: 'https://graphql-pokeapi.vercel.app/api/graphql',
    cache: new InMemoryCache()
  });

  return (
    <ApolloProvider client={client}>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact key="Home" component={Home}></Route>
          <Route path="/favorite" exact key="Favorite" component={Favorite}></Route>
          <Route path="/details/:url" exact key="Details" component={Details}></Route>
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;
