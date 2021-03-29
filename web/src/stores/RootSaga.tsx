import fork from 'redux-saga';
import { userSaga } from './User/UserSaga';

export function* rootSaga() {
    yield [
        fork(userSaga),
    ];
};
