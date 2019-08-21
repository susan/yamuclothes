import React from 'react';
import CheckoutPageStyles from './CheckoutPageStyles.css';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import  { selectCartItems, selectCartItemsTotal }  from '../../Selectors/cartSelectors'
import CheckoutItem from '../../Components/Checkout/CheckoutItem';

const CheckoutPage = ({ cartItems, totalValue }) => {


  const items = cartItems.map(item => {
  	return <CheckoutItem  key={item.id} item={item}  />
  })

  return(
	  <>
	  <div className='checkout-page'>
	    <div className='checkout-header'>
	      <div className='header-block'>
	        <span>Product</span>
	      </div>
	      <div className='header-block'>
	        <span>Description</span>
	      </div>
	      <div className='header-block'>
	        <span>Quantity</span>
	      </div>
	      <div className='header-block'>
	        <span>Price</span>
	      </div>
	      <div className='header-block'>
	        <span>Remove</span>
	      </div>
	    </div>
	  </div>
	  {items}
	  <div className= 'total'>
	    <span> TOTAL: ${totalValue} </span>
	  </div>
	 </>
  );

};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  totalValue: selectCartItemsTotal
})



export default connect(mapStateToProps)(CheckoutPage);
