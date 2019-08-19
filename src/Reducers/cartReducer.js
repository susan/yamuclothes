import { TOGGLE_CART_HIDDEN } from '../Types/cartTypes'


const initialCartState = {
  hidden: true
}


const cartReducer = (state= initialCartState, action) =>{

  switch(action.type) {
	   case TOGGLE_CART_HIDDEN: {
	    return {...state, hidden: !state.hidden}
	  }

	  default:
	    return state;
	}//end of switch
}//end of reducer

export default cartReducer;
