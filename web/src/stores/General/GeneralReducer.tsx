import { SET_ADD_TRIP_VISIBLE, SET_EDIT_TRIP_VISIBLE } from './GeneralActionTypes';
import { GeneralState, GeneralActions } from './GeneralTypes';

export const initialState: GeneralState = {
    isAddTripVisible: false,
    isEditTripVisible: false,
}

export const GeneralReducer = (state = initialState, action: GeneralActions) => {
    switch(action.type) {
        case SET_ADD_TRIP_VISIBLE:
            return {
                ...state,
                isAddTripVisible: !state.isAddTripVisible,
            }
        case SET_EDIT_TRIP_VISIBLE:
            return {
                ...state,
                isEditTripVisible: !state.isEditTripVisible,
            }
        default:
            return {
                ...state,
            }
    }
};
