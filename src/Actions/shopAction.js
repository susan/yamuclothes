import { UPDATE_COLLECTIONS } from '../Types/shopTypes'


export const updateCollections = (collectionsMap) => {
	return {
		type: UPDATE_COLLECTIONS,
	  payload: collectionsMap
	 }
}
