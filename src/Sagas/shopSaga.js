import { takeEvery, call, put } from 'redux-saga/effects';

import { FETCH_COLLECTIONS_START } from '../Types/shopTypes';

import {fetchCollectionsSuccess , fetchCollectionsFailure } from '../Actions/shopAction';

import { firestore, auth, createUserProfileDocument, convertCollectionsSnapshotToMap } from '../firebase/firebase.utils';


export function* fetchCollectionsAsync() {
  //yield console.log('is it working?')
  try {
	  const collectionRef = firestore.collection('collections');
	  const snapshot = yield collectionRef.get()
	  const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);
    yield put(fetchCollectionsSuccess(collectionsMap))
  }
  catch(error) {
    yield put(fetchCollectionsFailure(error.message))
  }
}


export function* fetchCollectionsStart() {
  yield takeEvery(FETCH_COLLECTIONS_START, fetchCollectionsAsync)
}
