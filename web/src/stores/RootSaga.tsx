import { all, fork } from 'redux-saga/effects';
import { userSaga } from './User/UserSaga';

export function* rootSaga() {
    yield all([
        fork(userSaga),
    ]);
};
