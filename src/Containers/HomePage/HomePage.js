import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MenuList from '../MenuList/MenuList'
import HatsPage from '../HatsPage/HatsPage';
import JacketsPage from '../JacketsPage/JacketsPage';
import SneakersPage from '../SneakersPage/SneakersPage';
import MensPage from '../MensPage/MensPage';
import WomensPage from '../WomensPage/WomensPage';


const HomePage = () => {

	return (
    <div>
    <Switch>
      <Route exact path = '/hats' component={HatsPage} />
      <Route exact path = '/jackets' component={JacketsPage} />
      <Route exact path = '/sneakers' component={SneakersPage} />
      <Route exact path = '/mens' component={MensPage} />
      <Route exact path = '/womens' component={WomensPage} />
    </Switch>
    <MenuList />
    </div>
	)
}
export default HomePage;
