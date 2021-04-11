import { SET_ADD_TRIP_VISIBLE, SET_EDIT_TRIP_VISIBLE, CLEAR_VISIBILITY } from 'GeneralActionTypes';

export interface GeneralState {
    isAddTripVisible: boolean;
    isEditTripVisible: boolean;
}

export interface SetAddTripVisible {
    type: typeof SET_ADD_TRIP_VISIBLE;
}

export interface SetEditTripVisible {
    type: typeof SET_EDIT_TRIP_VISIBLE;
}

export interface ClearVisibility {
    type: typeof CLEAR_VISIBILITY;
}

export type GeneralActions =
    | SetAddTripVisible
    | SetEditTripVisible
    | ClearVisibility;
