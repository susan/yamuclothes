import React, {Component} from 'react';
import HomePage from './Containers/HomePage/HomePage'
import Header from './Containers/Header'
import { createStructuredSelector } from 'reselect';
import './App.css';


import { Switch, Route , Redirect} from 'react-router-dom';
import { connect } from 'react-redux';

import HatsPage from './Containers/HatsPage/HatsPage';
import JacketsPage from './Containers/JacketsPage/JacketsPage';
import SneakersPage from './Containers/SneakersPage/SneakersPage';
import MensPage from './Containers/MensPage/MensPage';
import WomensPage from './Containers/WomensPage/WomensPage';
import ShopPage from './Containers/ShopPage/ShopComponent';
import CheckoutPage from './Containers/CheckoutPage/CheckoutPage';

import LoginandRegister from './Containers/LoginandRegisterPage/LoginandRegister';
import { firestore, auth, createUserProfileDocument, convertCollectionsSnapshotToMap } from './firebase/firebase.utils';

import { selectCurrentUser } from './Selectors/userSelector';


import { setCurrentUser } from './Actions/userAction';
import { fetchCollectionsStart } from './Actions/shopAction';

class App extends Component {

  unsubscribeFromAuth = null;
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const {setCurrentUser} = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }

      setCurrentUser(userAuth);
    });

   //const collectionRef = firestore.collection('collections');
   const { fetchCollectionsStart } = this.props
   fetchCollectionsStart();
   // this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
   //   const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
   //   this.props.updateCollections(collectionsMap)
   //})


  }


  componentWillUnmount() {
    this.unsubscribeFromAuth();
    //this.unsubscribeFromSnapshot();
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
        <Route exact path = '/checkout' component={CheckoutPage} />
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

  const mapStateToProps =  createStructuredSelector ({
     currentUser: selectCurrentUser
  });

  const mapDispatchToProps = (dispatch) => ({
    setCurrentUser: (user) => dispatch(setCurrentUser(user)),
    //updateCollections: (collectionsMap) => dispatch(updateCollections(collectionsMap))
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
  })


export default connect(mapStateToProps, mapDispatchToProps)(App);
