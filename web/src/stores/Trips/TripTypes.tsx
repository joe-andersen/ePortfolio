import {
    ADD_TRIP,
    ADD_TRIP_ERROR,
    ADD_TRIP_SUCCESS,
    LIST_TRIPS,
    LIST_TRIPS_ERROR,
    LIST_TRIPS_SUCCESS,
} from './TripActionTypes';

export interface TripState {
    addTrip: {
        error: string | null;
        fetching: boolean;
        data: AddTrip[]
    },
    allTrips: {
        error: string | null;
        fetching: boolean;
        data: Trip[]
    },
}

export interface AddTrip {
    code: string;
    name: string;
    length: string;
    start: Date;
    resort: string;
    perPerson: string;
    image: string;
    description: string;
}

export interface Trip extends AddTrip {
    id: string;
}

export interface AddTripRequestPayload {
    trip: AddTrip;
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
    payload: AddTripRequestPayload;
}

export interface AddTripSuccess {
    type: typeof ADD_TRIP_SUCCESS;
    payload: SuccessPayload<AddTrip>;
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
    payload: SuccessPayload<Trip>;
}

export type TripActions =
    | AddTripRequest
    | AddTripSuccess
    | AddTripError
    | ListTripsRequest
    | ListTripsSuccess
    | ListTripsError;
