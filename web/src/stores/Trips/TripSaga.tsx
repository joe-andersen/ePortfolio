import { put, call, takeLatest } from 'redux-saga/effects';
import {
    ADD_TRIP,
    ADD_TRIP_ERROR,
    ADD_TRIP_SUCCESS
} from './TripActionTypes';
import { addTripSuccess, addTripError } from './TripActions';
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

export function* tripSaga() {
    yield takeLatest(ADD_TRIP, addTripSaga);
}
