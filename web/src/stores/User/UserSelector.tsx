import { createSelector } from 'reselect';

const getUserToken = (state) => state.user.token;
const getUserError = (state) => state.user.error;

export const getUserTokenSelector = createSelector(
    getUserToken,
    (token) => token,
);

export const getUserErrorSelector = createSelector(
    getUserError,
    (error) => error,
);
