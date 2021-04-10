import { createSelector } from 'reselect';

const getIsAddTripVisible = (state) => state.general.isAddTripVisible;

const getIsEditTripVisible = (state) => state.general.isEditTripVisible;

export const getIsAddTripVisibleSelector = createSelector(
    getIsAddTripVisible,
    (isVisible) => isVisible,
);

export const getIsEditTripVisibleSelector = createSelector(
    getIsEditTripVisible,
    (isVisible) => isVisible,
);
