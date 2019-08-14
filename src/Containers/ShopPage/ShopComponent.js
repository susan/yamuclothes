import React, {Component} from 'react';
import Shop_Data from './shop.data.js';
import CollectionsList from './CollectionsList';

class ShopPage extends Component {

	state = {
    shopData: Shop_Data
	}

  render() {
    const categories = this.state.shopData.map(section => {
      return <CollectionsList key={section.id} section = {section} />
    })

  	return(
  		<>
  	    <h1>Collections </h1>
  	    {categories}

  	</>
  	)
  }
}

export default ShopPage;



