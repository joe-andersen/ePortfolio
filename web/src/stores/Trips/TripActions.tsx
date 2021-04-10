import {
    ADD_TRIP,
    ADD_TRIP_ERROR,
    ADD_TRIP_SUCCESS,
    EDIT_TRIP,
    EDIT_TRIP_ERROR,
    EDIT_TRIP_SUCCESS,
    LIST_TRIP,
    LIST_TRIPS,
    LIST_TRIPS_ERROR,
    LIST_TRIPS_SUCCESS,
    LIST_TRIP_ERROR,
    LIST_TRIP_SUCCESS,
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

export const listTrip = (payload) => {
    return {
        type: LIST_TRIP,
        payload,
    }
};

export const listTripError = (payload) => {
    return {
        type: LIST_TRIP_ERROR,
        payload: payload,
    }
};

export const listTripSuccess = (payload) => {
    return {
        type: LIST_TRIP_SUCCESS,
        payload: payload,
    }
};

export const editTrip = (id, payload) => {
    return {
        type: EDIT_TRIP,
        id: id,
        payload,
    }
};

export const editTripError = (payload) => {
    return {
        type: EDIT_TRIP_ERROR,
        payload: payload,
    }
};

export const editTripSuccess = (payload) => {
    return {
        type: EDIT_TRIP_SUCCESS,
        payload: payload,
    }
};
