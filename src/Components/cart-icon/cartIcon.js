import React from 'react';

//import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cartIconStyles.css';

import { connect } from 'react-redux';

import  { selectCartItemsCount }  from '../../Selectors/cartSelectors'
import { toggleCartHidden } from '../../Actions/cartAction'


const cartIcon = (props) => {

	const handleClick = () => {
		console.log('is this clicked')
		return props.toggleX()
	}

	return (
   <div className='cart-icon'>
   <h3 className='shopping-icon' onClick={handleClick}> 🛒 </h3>
   <span className= 'item=count'>{props.itemCount}</span>
   </div>
	)
}

const mapStateToProps= ( state ) => {
	return {
   itemCount: selectCartItemsCount(state)
	}
}


const mapDispatchToProps = dispatch => (
  {toggleX: () => dispatch(toggleCartHidden())}
)

export default connect(mapStateToProps, mapDispatchToProps)(cartIcon);
