import {
    ADD_TRIP,
    ADD_TRIP_ERROR,
    ADD_TRIP_SUCCESS,
} from './TripActionTypes';

export const addTrip = (payload) => {
    return {
        type: ADD_TRIP,
        payload,
    }
};

export const addTripError = (payload) => {
    return {
        type: ADD_TRIP_ERROR,
        payload: payload,
    }
};

export const addTripSuccess = (payload) => {
    return {
        type: ADD_TRIP_SUCCESS,
        payload: payload,
    }
};
