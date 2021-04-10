import { put, call, takeLatest, all } from 'redux-saga/effects';
import { ADD_TRIP, EDIT_TRIP, LIST_TRIP, LIST_TRIPS } from './TripActionTypes';
import {
    addTripSuccess,
    addTripError,
    listTripsSuccess,
    listTripsError,
    listTripError,
    listTripSuccess,
    editTripSuccess,
    editTripError,
} from './TripActions';
import * as Api from '../Api';

export function* addTripSaga(payload) {
    try {
        const response = yield call(Api.addTrip, payload.payload);

        if (response?.code !== 200) {
            yield put(addTripError(response?.error));
        } else {
            yield put(addTripSuccess(response));
        }
    } catch (error) {
        yield put(addTripError({
            error: error
        }));
    }
}

export function* listTripsSaga(payload) {
    try {
        const response = yield call(Api.listTrips);

        yield put(listTripsSuccess(response));
    } catch (error) {
        yield put(listTripsError({
            error: error
        }));
    }
}

export function* listTripSaga(payload) {
    try {
        const response = yield call(Api.listTrip, payload.payload);

        yield put(listTripSuccess(response));
    } catch (error) {
        yield put(listTripError({
            error: error
        }));
    }
}

export function* editTripSaga(data) {
    const { id, payload } = data;
    try {
        const response = yield call(Api.editTrip, id, payload);
        if (response?.code !== 200) {
            yield put(editTripError(response?.error));
        } else {
            yield put(editTripSuccess(response));
        }
    } catch (error) {
        yield put(editTripError({
            error: error
        }));
    }

}

export function* tripSaga() {
    yield all([
        takeLatest(ADD_TRIP, addTripSaga),
        takeLatest(LIST_TRIPS, listTripsSaga),
        takeLatest(LIST_TRIP, listTripSaga),
        takeLatest(EDIT_TRIP, editTripSaga),
    ])
}
