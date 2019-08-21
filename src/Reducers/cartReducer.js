import { TOGGLE_CART_HIDDEN, ADD_CART_ITEM, REMOVE_CART_ITEM, CLEAR_CART_ITEM_FROM_CART } from '../Types/cartTypes'
import { addItemToCart, removeItemFromCart } from '../utils/cart.utils.js'

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

     case REMOVE_CART_ITEM: {
     	return {...state, cartItems: removeItemFromCart(state.cartItems, action.payload)}
     }

     case CLEAR_CART_ITEM_FROM_CART: {
     	return {...state, cartItems: state.cartItems.filter(item =>
        item.id !== action.payload.id
       )}
     }

	  default:
	    return state;
	}//end of switch
}//end of reducer

export default cartReducer;
