import { SET_ADD_TRIP_VISIBLE } from 'GeneralActionTypes';

export interface GeneralState {
    isAddTripVisible: boolean;
}

export interface SetAddTripVisible {
    type: typeof SET_ADD_TRIP_VISIBLE;
}

export type GeneralActions = SetAddTripVisible;
