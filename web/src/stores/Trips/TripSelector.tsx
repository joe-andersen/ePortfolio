import { createSelector } from 'reselect';

const getAllTrips = (state) => state.trips.allTrips.data;

export const getAllTripsSelector = createSelector(
    getAllTrips,
    (allTrips) => allTrips,
);
