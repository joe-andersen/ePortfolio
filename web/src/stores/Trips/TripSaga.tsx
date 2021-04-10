import { put, call, takeLatest } from 'redux-saga/effects';
import { ADD_TRIP, LIST_TRIPS } from './TripActionTypes';
import { addTripSuccess, addTripError, listTripsSuccess, listTripsError } from './TripActions';
import * as Api from '../Api';

export function* addTripSaga(payload) {
    try {
        const response = yield call(Api.addTrip, payload.payload);

        yield put(addTripSuccess(response));
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

export function* tripSaga() {
    yield takeLatest(ADD_TRIP, addTripSaga);
    yield takeLatest(LIST_TRIPS, listTripsSaga);
}
