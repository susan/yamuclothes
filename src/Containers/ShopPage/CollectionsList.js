import React from 'react'
import Collection from './Collection'
import './ShopPage.css';

const Sections = ( props ) => {

	const items = props.section.items.map( item => {
	  return <Collection key={item.id} item= {item} />
	 })

	return(
		<>
      <h1 className="collectionTitle"> {props.section.title.toUpperCase()} </h1>
        <div className="collectionItem">
          {items}
        </div>
    </>
		)
}

export default Sections
