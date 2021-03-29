import { createSelector } from 'reselect';

const getUserToken = (state) => state.user.token;

export const getUserTokenSelector = createSelector(
    getUserToken,
    (token) => token,
);
