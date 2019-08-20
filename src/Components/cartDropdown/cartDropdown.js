import React from 'react';

import { connect } from 'react-redux';
import CartItem from '../cartItem/cartItem'

import CustomButton from '../CustomButtonComponent/CustomButton'


const CartDropdown = ( {cartItems} ) => {

	const items = cartItems.map(item => {
		return <CartItem key={item.id}  item={item} />
	})

	return(
	  <div className='cart-dropdown' >
		   <div className= 'cart-items' >
	        {items}
		   </div>
		   <CustomButton> GO TO CHECKOUT  </CustomButton>
	  </div>
  )
}

const mapStateToProps = (state) => {
  return { cartItems: state.cart.cartItems}
}



export default connect(mapStateToProps)(CartDropdown);
