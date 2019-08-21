
//import SHOP_DATA from '../Containers/ShopPage/shop.data.js'
import { UPDATE_COLLECTIONS } from '../Types/shopTypes'


const initialShopState = {
  collections: [],
}



const shopReducer=(state=initialShopState, action) => {
  //console.log("initialstate is", state, "Action", action)
  switch(action.type) {

    case UPDATE_COLLECTIONS: {
      return {
      	...state, collections: action.payload
      }
    }

    default:
		  return state;
	}//end of switch
}//end of export

export default shopReducer;



