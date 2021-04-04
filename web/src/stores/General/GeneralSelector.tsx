import { createSelector } from 'reselect';

const getIsAddTripVisible = (state) => state.general.isAddTripVisible;

export const getIsAddTripVisibleSelector = createSelector(
    getIsAddTripVisible,
    (isVisible) => isVisible,
);
