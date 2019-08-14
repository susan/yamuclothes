import React, {Component} from 'react';
import ShopData from '/Shop.data'

class ShopPage extends Component {

	state = {
    shopData: ShopData
	}

  render () {
  	return(
  	  <h1> I am shop page </h1>
    )
  }
}

export default ShopPage;



