import { combineReducers } from 'redux';
import { UserReducer } from './User/UserReducer';

export const rootReducer = combineReducers({
    user: UserReducer,
});
