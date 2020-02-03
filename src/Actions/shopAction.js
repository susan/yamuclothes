import { UPDATE_COLLECTIONS, FETCH_COLLECTIONS_START, FETCH_COLLECTIONS_SUCCESS, FETCH_COLLECTIONS_FAILURE } from '../Types/shopTypes'


// export const updateCollections = (collectionsMap) => {
// 	return {
// 		type: UPDATE_COLLECTIONS,
// 	  payload: collectionsMap
// 	 }
// }



export const fetchCollectionsStart = () => {
	return {
		type: FETCH_COLLECTIONS_START
	 }
}

export const fetchCollectionsSuccess = (collectionsMap) => {
	return {
		type: FETCH_COLLECTIONS_SUCCESS,
		payload: collectionsMap
	 }
}

export const fetchCollectionsFailure = (errorMessage) => {
	return {
		type: FETCH_COLLECTIONS_FAILURE,
		payload: errorMessage
	 }
}
