import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { withAuth0 } from '@auth0/auth0-react';
import { Container } from 'react-bootstrap';
import Home from './components/Home';
import FavCrypto from './components/FavCrypto';
import Favourite from './components/Favourite';
import LoginButton from './components/LoginButton';



class App extends React.Component {

  render() {
    const { isAuthenticated } = this.props.auth0;
    return(
      <>
        <Router>
            <Header />
            <Switch>
              <Route exact path="/">
               {isAuthenticated ? <Container><Home/></Container> : <LoginButton/>}
              </Route>
              <Route exact path="/FavCrypto">
              {isAuthenticated ? <Container><Favourite/></Container>: <LoginButton/>}
                
              </Route>
            </Switch>
            <Footer />
        </Router>
      </>
    );
  }
}

export default withAuth0(App);
