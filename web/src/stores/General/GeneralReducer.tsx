import { SET_ADD_TRIP_VISIBLE } from './GeneralActionTypes';
import { GeneralState, GeneralActions } from './GeneralTypes';

export const initialState: GeneralState = {
    isAddTripVisible: false,
}

export const GeneralReducer = (state = initialState, action: GeneralActions) => {
    switch(action.type) {
        case SET_ADD_TRIP_VISIBLE:
            console.log('generalReducer:', action);
            return {
                ...state,
                isAddTripVisible: !state.isAddTripVisible,
            }
        default:
            return {
                ...state,
            }
    }
};
