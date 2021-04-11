import { all, call, takeLatest } from 'redux-saga/effects';
import { CLEAR_VISIBILITY, SET_ADD_TRIP_VISIBLE, SET_EDIT_TRIP_VISIBLE } from './GeneralActionTypes';
import { clearVisibility, setAddTripVisible, setEditTripVisible } from './GeneralActions';

export function* setAddTripVisibleSaga() {
    yield call(setAddTripVisible);
}

export function* setEditTripVisibleSaga() {
    yield call(setEditTripVisible);
}

export function* clearVisibilitySaga() {
    yield call(clearVisibility);
}

export function* generalSaga() {
    all([
        yield takeLatest(SET_ADD_TRIP_VISIBLE, setAddTripVisibleSaga),
        yield takeLatest(SET_EDIT_TRIP_VISIBLE, setEditTripVisibleSaga),
        yield takeLatest(CLEAR_VISIBILITY, clearVisibilitySaga),
    ]);
}
