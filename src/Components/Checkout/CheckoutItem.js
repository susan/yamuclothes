import React from 'react';
import { connect } from 'react-redux';
import { addCartItem, removeCartItem, clearCartItemFromCart } from '../../Actions/cartAction';

import './CheckoutItemStyles.css'

const CheckoutItem = ( {item, addCartItem, removeCartItem, clearCartItemFromCart} ) => {
  return (
    <div className = 'checkout-item'>
       <div className = 'image-container'>
       <img className='img' src={item.imageUrl} alt ='item'/>
       </div>
       	<span className='name'>{item.name} </span>
       	<span className= 'quantity'>
	       	<div className = 'arrow' onClick = {
        	  () => {
              removeCartItem(item)
            }
          }> &#10094;</div>
	       	  <span className= 'value'>{item.quantity}</span>
	         <div className = 'arrow' onClick = {
        	  () => {
              addCartItem(item)
            }
          }>&#10095;</div>
	       </span>
        <span className= 'price'>${item.price} </span>
        <div className='remove-button'
        	onClick = {
        	  () => {
              clearCartItemFromCart(item)
            }
          }
        > &#10005; </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
	return {
		addCartItem: (item)=> dispatch(addCartItem(item)),
		removeCartItem: (item)=> dispatch(removeCartItem(item)),
    clearCartItemFromCart: (item)=> dispatch(clearCartItemFromCart(item))
	}
}

export default connect(null, mapDispatchToProps)(CheckoutItem);
