import React from 'react'

const Collection = ( {item} ) => {

	return(
		<>
		  <div className="collectionContent">
         <img className= "collectionImage" src={item.imageUrl} alt="" />

       <div className = "collectionFooter">
          <span>name: {item.name}</span> <span> price: ${item.price} </span>
        </div>
		  </div>
		</>
		)
}

export default Collection;
