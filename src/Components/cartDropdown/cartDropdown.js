import React from 'react';


import CustomButton from '../CustomButtonComponent/CustomButton'


const CartDropdown = () => {
	return(
	  <div className='cart-dropdown' >
	   <div className= 'cart-items' >
	   <CustomButton> GO TO CHECKOUT  </CustomButton>
	   </div>
	  </div>
  )
}

export default CartDropdown;
