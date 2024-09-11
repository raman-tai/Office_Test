import { all } from 'redux-saga/effects';
import authSaga from './authSaga';
import drivesSaga from './drivesSaga';

export default function* rootSaga() {
    yield all([
        authSaga(),
    ]);
}
