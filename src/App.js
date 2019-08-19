import React, {Component} from 'react';
import HomePage from './Containers/HomePage/HomePage'
import Header from './Containers/Header'
import './App.css';

import { Switch, Route , Redirect} from 'react-router-dom';
import { connect } from 'react-redux';

import HatsPage from './Containers/HatsPage/HatsPage';
import JacketsPage from './Containers/JacketsPage/JacketsPage';
import SneakersPage from './Containers/SneakersPage/SneakersPage';
import MensPage from './Containers/MensPage/MensPage';
import WomensPage from './Containers/WomensPage/WomensPage';
import ShopPage from './Containers/ShopPage/ShopComponent';

import LoginandRegister from './Containers/LoginandRegisterPage/LoginandRegister';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';


import { setCurrentUser } from './Actions/userAction'

class App extends Component {


  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.props.setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }

      this.props.setCurrentUser(userAuth);
    });
  }


  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }


  render() {
    return (
      <>
      <Header />
      <Switch>
        <Route exact path = '/hats' component={HatsPage} />
        <Route exact path = '/jackets' component={JacketsPage} />
        <Route exact path = '/sneakers' component={SneakersPage} />
        <Route exact path = '/mens' component={MensPage} />
        <Route exact path = '/womens' component={WomensPage} />
        <Route exact path = '/' component={HomePage} />
        <Route exact path = '/shop' component={ShopPage} />
        <Route exact path = '/login'
        render={
          () => this.props.currentUser
          ?
          (<Redirect to='/' />)
          :
          (<LoginandRegister />)
          } />
      </Switch>
      </>
    );
  }
}

  const mapStateToProps = (state) => {
    return { currentUser: this.state.user.currentUser}
  }

  const mapDispatchToProps = (dispatch) => ({
    setCurrentUser: (user) => dispatch(setCurrentUser(user))
  })


export default connect(null, mapDispatchToProps)(App);
