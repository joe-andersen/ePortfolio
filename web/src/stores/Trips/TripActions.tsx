import {
    ADD_TRIP,
    ADD_TRIP_ERROR,
    ADD_TRIP_SUCCESS,
    LIST_TRIPS,
    LIST_TRIPS_ERROR,
    LIST_TRIPS_SUCCESS,
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

export const listTrips = () => {
    return {
        type: LIST_TRIPS,
    }
};

export const listTripsError = (payload) => {
    return {
        type: LIST_TRIPS_ERROR,
        payload: payload,
    }
};

export const listTripsSuccess = (payload) => {
    return {
        type: LIST_TRIPS_SUCCESS,
        payload: payload,
    }
};
