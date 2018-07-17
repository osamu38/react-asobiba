import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Container from '../Container';
import Main from '../Main';
import Header from '../Header';
import Footer from '../Footer';
import routes from '../../routes';
import '../../styles';

export default function App() {
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
