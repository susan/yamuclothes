import { SET_CURRENT_USER } from '../Types/userTypes'

const initialUserState = {
  currentUser: null
}

export default function userReducer( state=initialUserState, action ) {

	switch(action.type) {

		case SET_CURRENT_USER: {
      return {...state, currentUser: action.payload }
		}

		default:
		  return state;
	}//end of switch
}//end of export
