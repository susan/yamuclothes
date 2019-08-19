
import { SET_CURRENT_USER } from '../Types/userTypes'

export const setCurrentUser = (user) => {
	return {
		type: SET_CURRENT_USER,
	  payload: user
	 }
}
