
import { all } from 'redux-saga/effects';
import { fetchCollectionsStart } from './shopSaga';


export default function* rootSaga() {
	yield all([fetchCollectionsStart()]);
}
