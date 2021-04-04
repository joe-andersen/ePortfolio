import { put, call, takeLatest } from 'redux-saga/effects';
import {
    LOGIN_USER,
    LOGIN_USER_ERROR,
    LOGIN_USER_SUCCESS,
    REGISTER_USER,
    REGISTER_USER_ERROR,
    REGISTER_USER_SUCCESS,
} from './UserActionTypes';
import { loginUserError, loginUserSuccess } from './UserActions';
import * as Api from '../Api';

export function* registerSaga(payload) {
    try {
        const response = yield call(Api.registerUser, payload);
        yield put(loginUserSuccess(response));
    } catch(error) {
        yield put({ type: REGISTER_USER_ERROR, error: error })
    }
}

export function* loginSaga(payload) {
    try {
        const response = yield call(Api.loginUser, payload);
        yield put(loginUserSuccess(response));
    } catch (error) {
        yield put(loginUserError(error));
    }
}

export function* userSaga() {
    yield takeLatest(REGISTER_USER, registerSaga);
    yield takeLatest(LOGIN_USER, loginSaga);
}
