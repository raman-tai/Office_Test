import { put, takeLatest } from 'redux-saga/effects';
import { authRequest, authSuccess, authFailure } from '../slices/authSlice';

const accuntDetails = {
    adminName: 'admin',
    adminPassword: 'admin123',
    userName: 'user',
    userPassword: 'user123',
}

function* handleUser(action) {
    const { username, password } = action.payload;
    try {
        if (username === accuntDetails.userName && password === accuntDetails.userPassword) {
            yield put(authSuccess('user'))
        } else if (username === accuntDetails.adminName && password === accuntDetails.adminPassword) {
            yield put(authSuccess('admin'))
        } else {
            throw new Error("invalid credentials");
        }
    } catch (error) {
        yield put(authFailure(error.message))
    }
}
export default function* authSaga() {
    yield takeLatest(authRequest.type, handleUser)
}