import React, {Component} from 'react';
import { connect } from 'react-redux'
import CollectionsList from './CollectionsList';

import { createStructuredSelector } from 'reselect';
import { selectShopData } from '../../Selectors/shopSelectors'

const ShopPage = (props) => {

  const categories = props.collections.map(section => {
    return <CollectionsList key={section.id} section = {section} />
  })

  	return(
  		<>
  	    <h1>Collections </h1>
  	    {categories}
  	</>
  	)
}

const mapStateToProps = createStructuredSelector(
  {collections: selectShopData}
)


export default connect(mapStateToProps)(ShopPage);



