import { createSelector } from 'reselect';

const getAllTrips = (state) => state.trips.allTrips.data;

const getEditTripSelectedTripFetching = (state) => state.trips.editTrip.selectedTrip.fetching; 

const getEditTripSelectedTrip = (state) => state.trips.editTrip.selectedTrip.data;

export const getAllTripsSelector = createSelector(
    getAllTrips,
    (allTrips) => allTrips,
);

export const getEditTripSelectedTripFetchingSelector = createSelector(
    getEditTripSelectedTripFetching,
    (isFetching) => isFetching,
);

export const getEditTripSelectedTripSelector = createSelector(
    getEditTripSelectedTrip,
    (trip) => trip,
);
