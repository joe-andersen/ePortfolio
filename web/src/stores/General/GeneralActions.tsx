import  { SET_ADD_TRIP_VISIBLE, SET_EDIT_TRIP_VISIBLE } from './GeneralActionTypes';

export const setAddTripVisible = () => {
    return {
        type: SET_ADD_TRIP_VISIBLE,
    }
};

export const setEditTripVisible = () => {
    return {
        type: SET_EDIT_TRIP_VISIBLE,
    }
};
