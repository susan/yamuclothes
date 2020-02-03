
//import SHOP_DATA from '../Containers/ShopPage/shop.data.js'
import { UPDATE_COLLECTIONS, FETCH_COLLECTIONS_START, FETCH_COLLECTIONS_SUCCESS, FETCH_COLLECTIONS_FAILURE } from '../Types/shopTypes'




const initialShopState = {
  collections: [],
  error: null,
}



const shopReducer=(state=initialShopState, action) => {
  //console.log("initialstate is", state, "Action", action)
  switch(action.type) {

    case FETCH_COLLECTIONS_SUCCESS: {
      return {
      	...state, collections: action.payload
      }
    }

    case FETCH_COLLECTIONS_FAILURE: {
      return {
        ...state, error: action.payload
      }
    }

    default:
		  return state;
	}//end of switch
}//end of export

export default shopReducer;



