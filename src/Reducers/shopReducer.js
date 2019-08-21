
import SHOP_DATA from '../Containers/ShopPage/shop.data.js'

const initialShopState = {
  collections: SHOP_DATA
}



const shopReducer=(state=initialShopState, action) => {
  switch(action.type) {
    default:
		  return state;
	}//end of switch
}//end of export

export default shopReducer;



