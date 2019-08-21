import React from 'react';

import { connect } from 'react-redux';
import CartItem from '../cartItem/cartItem'

import { withRouter } from 'react-router-dom'

import { createStructuredSelector } from 'reselect';

import  { selectCartItems }  from '../../Selectors/cartSelectors'

import CustomButton from '../CustomButtonComponent/CustomButton'
import { toggleCartHidden } from '../../Actions/cartAction'
import './cartDropdownStyles.css';

const CartDropdown = ( {cartItems, history, dispatch } ) => {

	const items = cartItems.map(item => {
		return <CartItem key={item.id}  item={item} />
	})

	return(
	  <div className='cart-dropdown' >
		   <div className= 'cart-items' >
	        { items.length
            ?
	          items
	          :
	          <span className='empty-message'>Your Cart is Empty</span>
          }
		   </div>
		   <CustomButton onClick= {
		   	() => {
		   	 history.push('/checkout');
         dispatch(toggleCartHidden());
		     }
		   }
		   >
		   GO TO CHECKOUT
		   </CustomButton>
	  </div>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})



export default withRouter(connect(mapStateToProps)(CartDropdown));
