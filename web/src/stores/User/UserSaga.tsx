import { put, call, takeLatest } from 'redux-saga/effects';
import {
    LOGIN_USER,
    REGISTER_USER,
} from './UserActionTypes';
import { loginUserError, loginUserSuccess, registerUserError, registerUserSuccess } from './UserActions';
import * as Api from '../Api';

export function* registerSaga(payload) {
    try {
        const response = yield call(Api.registerUser, payload);
        if (response?.code !== 200) {
            yield put(registerUserError(response?.error));
        } else {
            yield put(registerUserSuccess(response));
        }
    } catch(error) {
        yield put(registerUserError(error));
    }
}

export function* loginSaga(payload) {
    try {
        const response = yield call(Api.loginUser, payload);
        if (response?.code !== 200) {
            yield put(loginUserError(response?.error));
        } else {
            yield put(loginUserSuccess(response));
        }
    } catch (error) {
        yield put(loginUserError(error));
    }
}

export function* userSaga() {
    yield takeLatest(REGISTER_USER, registerSaga);
    yield takeLatest(LOGIN_USER, loginSaga);
}
