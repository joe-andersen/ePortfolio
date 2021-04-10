import {
    ADD_TRIP,
    ADD_TRIP_ERROR,
    ADD_TRIP_SUCCESS,
    LIST_TRIPS,
    LIST_TRIPS_ERROR,
    LIST_TRIPS_SUCCESS,
    LIST_TRIP,
    LIST_TRIP_ERROR,
    LIST_TRIP_SUCCESS,
    EDIT_TRIP,
    EDIT_TRIP_ERROR,
    EDIT_TRIP_SUCCESS,
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
    },
    editTrip: {
        selectedTrip: {
            error: null,
            fetching: false,
            data: null,
        },
        saveChanges: {
            error: null,
            fetching: false,
            data: null,
        },
    },
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
        case LIST_TRIP:
            return {
                ...state,
                editTrip: {
                    selectedTrip: {
                        fetching: true,
                        error: null,
                        data: null,
                    },
                }
            }
        case LIST_TRIP_ERROR:
            return {
                ...state,
                editTrip: {
                    selectedTrip: {
                        fetching: false,
                        error: action.payload.error,
                        data: null,
                    },
                }
            }
        case LIST_TRIP_SUCCESS:
            return {
                ...state,
                editTrip: {
                    selectedTrip: {
                        fetching: false,
                        error: null,
                        data: action.payload.data[0],
                    }
                }
            }
        case EDIT_TRIP:
            return {
                ...state,
                editTrip: {
                    saveChanges: {
                        fetching: true,
                        error: null,
                        data: null,
                    }
                }
            }
        case EDIT_TRIP_ERROR:
            return {
                ...state,
                editTrip: {
                    saveChanges: {
                        fetching: false,
                        error: action.payload.error,
                        data: null,
                    },
                }
            }
        case EDIT_TRIP_SUCCESS:
            return {
                ...state,
                editTrip: {
                    saveChanges: {
                        fetching: false,
                        error: null,
                        data: action.payload.data[0],
                    }
                }
            }
        default:
            return {
                ...state
            }
    }
}
