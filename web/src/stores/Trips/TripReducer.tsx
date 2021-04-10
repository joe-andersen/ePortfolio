import {
    ADD_TRIP,
    ADD_TRIP_ERROR,
    ADD_TRIP_SUCCESS,
    LIST_TRIPS,
    LIST_TRIPS_ERROR,
    LIST_TRIPS_SUCCESS,
} from './TripActionTypes';
import { TripState, TripActions } from './TripTypes';

export const initialState: TripState = {
    addTrip: {
        error: null,
        fetching: false,
        data: [],
    },
    allTrips: {
        error: null,
        fetching: false,
        data: [],
    }
}

export const TripReducer = (state = initialState, action: TripActions) => {
    switch(action.type) {
        case ADD_TRIP:
            return {
                ...state,
                addTrip: {
                    fetching: true,
                }
            }
        case ADD_TRIP_ERROR:
            return {
                ...state,
                addTrip: {
                    error: action.payload.error,
                    fetching: false,
                }
            }
        case ADD_TRIP_SUCCESS:
            return {
                ...state,
                addTrip: {
                    data: action.payload.data,
                    fetching: false,
                }
            }
        case LIST_TRIPS:
            return {
                ...state,
                allTrips: {
                    fetching: true,
                }
            }
        case LIST_TRIPS_ERROR:
            return {
                ...state,
                allTrips: {
                    fetching: false,
                    error: action.payload.error,
                }
            }
        case LIST_TRIPS_SUCCESS:
            return {
                ...state,
                allTrips: {
                    fetching: false,
                    error: null,
                    data: action.payload.data[0],
                }
            }
        default:
            return {
                ...state
            }
    }
}
