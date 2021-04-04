import { all, fork } from 'redux-saga/effects';
import { userSaga } from './User/UserSaga';
import { generalSaga } from './General/GeneralSaga';

export function* rootSaga() {
    yield all([
        fork(userSaga),
        fork(generalSaga),
    ]);
};
