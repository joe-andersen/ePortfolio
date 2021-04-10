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

export interface TripState {
    addTrip: {
        error: string | null;
        fetching: boolean;
        data: Trip[]
    },
    allTrips: {
        error: string | null;
        fetching: boolean;
        data: TripWithId[]
    },
    editTrip: {
        selectedTrip: {
            error: string | null;
            fetching: boolean;
            data: TripWithId | null;
        },
        saveChanges: {
            error: string | null;
            fetching: boolean;
            data: Trip | null;
        },
    }
}

export interface Trip {
    code: string;
    name: string;
    length: string;
    start: Date;
    resort: string;
    perPerson: string;
    image: string;
    description: string;
}

export interface TripWithId extends Trip {
    id: string;
}

export interface TripRequestPayload {
    trip: Trip;
}

export interface ListTripRequestPayload {
    code: string;
}

// TODO: Create Generic Types
// Move this from here and UserTypes
export interface ErrorPayload {
    error: string;
}

export interface SuccessPayload<T> {
    data: T;
}

export interface AddTripRequest {
    type: typeof ADD_TRIP;
    payload: TripRequestPayload;
}

export interface AddTripSuccess {
    type: typeof ADD_TRIP_SUCCESS;
    payload: SuccessPayload<Trip>;
}

export interface AddTripError {
    type: typeof ADD_TRIP_ERROR;
    payload: ErrorPayload;
}

export interface ListTripsRequest {
    type: typeof LIST_TRIPS;
}

export interface ListTripsError {
    type: typeof LIST_TRIPS_ERROR;
    payload: ErrorPayload;
}

export interface ListTripsSuccess {
    type: typeof LIST_TRIPS_SUCCESS;
    payload: SuccessPayload<TripWithId>;
}

export interface ListTripRequest {
    type: typeof LIST_TRIP;
    payload: ListTripRequestPayload;
}

export interface ListTripError {
    type: typeof LIST_TRIP_ERROR;
    payload: ErrorPayload;
}

export interface ListTripSuccess {
    type: typeof LIST_TRIP_SUCCESS;
    payload: SuccessPayload<TripWithId>;
}

export interface EditTripRequest {
    type: typeof EDIT_TRIP;
    payload: TripRequestPayload;
}

export interface EditTripSuccess {
    type: typeof EDIT_TRIP_SUCCESS;
    payload: SuccessPayload<Trip>;
}

export interface EditTripError {
    type: typeof EDIT_TRIP_ERROR;
    payload: ErrorPayload;
}

export type TripActions =
    | AddTripRequest
    | AddTripSuccess
    | AddTripError
    | ListTripsRequest
    | ListTripsSuccess
    | ListTripsError
    | ListTripRequest
    | ListTripSuccess
    | ListTripError
    | EditTripRequest
    | EditTripSuccess
    | EditTripError;
