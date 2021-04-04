import { all, fork } from 'redux-saga/effects';
import { userSaga } from './User/UserSaga';
import { generalSaga } from './General/GeneralSaga';
import { tripSaga } from './Trips/TripSaga';

export function* rootSaga() {
    yield all([
        fork(userSaga),
        fork(generalSaga),
        fork(tripSaga),
    ]);
};
