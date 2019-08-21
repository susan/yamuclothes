import { TOGGLE_CART_HIDDEN, ADD_CART_ITEM, REMOVE_CART_ITEM, CLEAR_CART_ITEM_FROM_CART } from '../Types/cartTypes'

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

export const removeCartItem = (item) => {
	return {
		type: REMOVE_CART_ITEM,
		payload: item
	 }
}

export const clearCartItemFromCart = (item) => {
	return {
		type: CLEAR_CART_ITEM_FROM_CART,
		payload: item
	 }
}
