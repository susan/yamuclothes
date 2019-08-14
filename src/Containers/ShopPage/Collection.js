import React from 'react'

const Collection = ( {item} ) => {

	return(
		<div className="collectionContent">
     <img className= "collectionImage" src={item.imageUrl} alt="" />
     <p>  name: {item.name}  <span>price: ${item.price}</span> </p>
		</div>
		)
}

export default Collection;
