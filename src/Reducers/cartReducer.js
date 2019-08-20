import { TOGGLE_CART_HIDDEN, ADD_CART_ITEM } from '../Types/cartTypes'
import { addItemToCart } from '../utils/cart.utils.js'

const initialCartState = {
  hidden: true,
  cartItems: [],
}


const cartReducer = (state= initialCartState, action) =>{
	//console.log("initialstate is", state, "Action", action)
  switch(action.type) {
	   case TOGGLE_CART_HIDDEN: {
	    return {...state, hidden: !state.hidden}
	  }

     case ADD_CART_ITEM: {
     	return {...state, cartItems: addItemToCart(state.cartItems, action.payload) }
     }

	  default:
	    return state;
	}//end of switch
}//end of reducer

export default cartReducer;
