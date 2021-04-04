import { call, takeLatest } from 'redux-saga/effects';
import { SET_ADD_TRIP_VISIBLE } from './GeneralActionTypes';
import { setAddTripVisible } from './GeneralActions';

export function* setAddTripVisibleSaga() {
    yield call(setAddTripVisible);
}

export function* generalSaga() {
    yield takeLatest(SET_ADD_TRIP_VISIBLE, setAddTripVisibleSaga);
}
