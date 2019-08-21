import React from 'react';

import './cartItemStyles.css';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <div className='cart-item'>
    <img src={imageUrl} alt='item' />
    <div className='item-details'>
      <span className='name'>{name}</span>
      <br></br>
      <span className='price'>
        {quantity} x ${price}
      </span>
    </div>
  </div>
);

export default CartItem;
