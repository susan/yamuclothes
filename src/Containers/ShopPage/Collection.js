import React from 'react';
import CustomButton from '../../Components/CustomButtonComponent/CustomButton';
import { addCartItem } from '../../Actions/cartAction'
import { connect } from 'react-redux';

const Collection = ( {item, addItem } ) => {

   const handleClick = () => {
      console.log(item)
      return addItem(item)
   }


	return(
		<>
		  <div className="collectionContent">
         <img className= "collectionImage" src={item.imageUrl} alt="" />

       <div className = "collectionFooter">
          <span>name: {item.name}</span> <span> price: ${item.price} </span>
        </div>
        <CustomButton inverted onClick={handleClick}> ADD TO CART </CustomButton>
		  </div>
		</>
		)
}

const mapDispatchToProps = (dispatch) => {

	return { addItem: (item) => dispatch(addCartItem(item)) }
}

export default connect(null, mapDispatchToProps)(Collection);
