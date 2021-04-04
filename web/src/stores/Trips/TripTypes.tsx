import {
    ADD_TRIP,
    ADD_TRIP_ERROR,
    ADD_TRIP_SUCCESS,
} from './TripActionTypes';

export interface TripState {
    error: string | null;
    fetching: boolean;
    data: Trip[];
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

export interface AddTripRequestPayload {
    trip: Trip;
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
    payload: SuccessPayload<Trip>;
}

export interface AddTripError {
    type: typeof ADD_TRIP_ERROR;
    payload: ErrorPayload
}

export type TripActions =
    | AddTripRequest
    | AddTripSuccess
    | AddTripError;
