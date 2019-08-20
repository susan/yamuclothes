

export const addItemToCart = (cartItems, cartItemToAdd) => {

	const existingItem= cartItems.find(item=> {
		return item.id === cartItemToAdd.id
	})

	if (existingItem) {
    return cartItems.map(cartItem => {
      return(
         cartItem.id === existingItem.id
           ?
         ( {...cartItem, quantity: cartItem.quantity + 1 } )
           :
         (cartItem)
       )
    })
	}
	return [...cartItems, {...cartItemToAdd, quantity: 1}]
}




