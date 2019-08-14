import React from 'react'

const Collection = ( {item} ) => {

	return(
		<div className="collectionContent">
     <p> name: {item.name} </p>
     <img className= "collectionImage" src={item.imageUrl} alt="" />
     <p> price: ${item.price} </p>
		</div>
		)
}

export default Collection;
