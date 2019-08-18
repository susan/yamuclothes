import React, {Component} from 'react';
import HomePage from './Containers/HomePage/HomePage'
import Header from './Containers/Header'
import './App.css';

import { Switch, Route } from 'react-router-dom';

import HatsPage from './Containers/HatsPage/HatsPage';
import JacketsPage from './Containers/JacketsPage/JacketsPage';
import SneakersPage from './Containers/SneakersPage/SneakersPage';
import MensPage from './Containers/MensPage/MensPage';
import WomensPage from './Containers/WomensPage/WomensPage';
import ShopPage from './Containers/ShopPage/ShopComponent';

import LoginandRegister from './Containers/LoginandRegisterPage/LoginandRegister';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends Component {

  state = {
    currentUser: null
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      }

      this.setState({ currentUser: userAuth });
    });
  }


  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }


  render() {
    return (
      <>
      <Header currentUser={this.state.currentUser}/>
      <Switch>
        <Route exact path = '/hats' component={HatsPage} />
        <Route exact path = '/jackets' component={JacketsPage} />
        <Route exact path = '/sneakers' component={SneakersPage} />
        <Route exact path = '/mens' component={MensPage} />
        <Route exact path = '/womens' component={WomensPage} />
        <Route exact path = '/' component={HomePage} />
        <Route exact path = '/shop' component={ShopPage} />
        <Route exact path = '/login' component={LoginandRegister} />
      </Switch>
      </>
    );
  }
}

export default App;
