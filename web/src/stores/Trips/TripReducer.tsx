import {
    ADD_TRIP,
    ADD_TRIP_ERROR,
    ADD_TRIP_SUCCESS,
} from './TripActionTypes';
import { TripState, TripActions } from './TripTypes';

export const initialState: TripState = {
    error: null,
    fetching: false,
    data: [],
}

export const TripReducer = (state = initialState, action: TripActions) => {
    switch(action.type) {
        case ADD_TRIP:
            return {
                ...state,
                fetching: true,
            }
        case ADD_TRIP_ERROR:
            return {
                ...state,
                error: action.payload.error,
                fetching: false,
            }
        case ADD_TRIP_SUCCESS:
            return {
                ...state,
                data: action.payload.data,
                fetching: false,
            }
        default:
            return {
                ...state
            }
    }
}
