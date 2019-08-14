import React from 'react'

const Collection = ( {item} ) => {

	return(
		<>
     <p> name: {item.name} </p>
     <img src={item.imageUrl} alt="" />
     <p> price: ${item.price} </p>
		</>
		)
}

export default Collection;
