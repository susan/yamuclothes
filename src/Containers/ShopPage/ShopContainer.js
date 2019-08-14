import React from 'react';
import Shop_Data from './shop.data.js';
import CollectionsList from './CollectionsList';

const ShopContainer = ( {shopData}) => {

  const categories = shopData.map(section => {
      return <CollectionsList key={section.id} section = {section} />
    })

  	return(
  		<>
  	    <h1>Collections </h1>
  	    {categories}
  	 </>
  	)
}

export default ShopContainer;



