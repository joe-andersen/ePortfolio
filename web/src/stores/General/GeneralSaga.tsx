import { call, takeLatest } from 'redux-saga/effects';
import { SET_ADD_TRIP_VISIBLE, SET_EDIT_TRIP_VISIBLE } from './GeneralActionTypes';
import { setAddTripVisible, setEditTripVisible } from './GeneralActions';

export function* setAddTripVisibleSaga() {
    yield call(setAddTripVisible);
}

export function* setEditTripVisibleSaga() {
    yield call(setEditTripVisible);
}

export function* generalSaga() {
    yield takeLatest(SET_ADD_TRIP_VISIBLE, setAddTripVisibleSaga);
    yield takeLatest(SET_EDIT_TRIP_VISIBLE, setEditTripVisibleSaga);
}
