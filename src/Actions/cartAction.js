import { TOGGLE_CART_HIDDEN, ADD_CART_ITEM } from '../Types/cartTypes'

export const toggleCartHidden = () => {
	return {
		type: TOGGLE_CART_HIDDEN
	 }
}

export const addCartItem = (item) => {
	return {
		type: ADD_CART_ITEM,
		payload: item
	 }
}
