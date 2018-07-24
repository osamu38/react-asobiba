import React from 'react';
import { hot } from 'react-hot-loader';
import { Route, Switch } from 'react-router-dom';
import Container from '../Container';
import Main from '../Main';
import Header from '../Header';
import Footer from '../Footer';
import routes from '../../routes';
import '../../styles';

function App() {
  return (
    <Container>
      <Header />
      <Main>
        <Switch>
          {routes.map(route => <Route key={route.path} {...route} />)}
        </Switch>
      </Main>
      <Footer />
    </Container>
  );
}

export default hot(module)(App);
