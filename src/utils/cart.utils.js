

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


export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingItem= cartItems.find(item=> {
    return item.id === cartItemToRemove.id
  })

  if (existingItem.quantity > 1) {
    return cartItems.map(cartItem => {
      return(
         cartItem.id === existingItem.id
           ?
         ( {...cartItem, quantity: cartItem.quantity - 1 } )
           :
         (cartItem)
       )
    })
  }

  return cartItems.filter(item =>
    item.id !== cartItemToRemove.id
  )
}






