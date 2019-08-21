import React from 'react'



const CheckoutItem = ( {item} ) => {
  return (
    <div className = 'checkout-item'>
       <div className = 'image-container'>
       <img className='img' src={item.imageUrl} alt ='item'/>
       </div>
       	<span className='name'>{item.name} </span>
       	<span className= 'quantity'>{item.quantity}</span>
        <span className= 'price'>${item.price} </span>
        <div className='remove-button'> &#10005; </div>
    </div>
  )
}

export default CheckoutItem;
