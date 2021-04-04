import { combineReducers } from 'redux';
import { UserReducer } from './User/UserReducer';
import { GeneralReducer } from './General/GeneralReducer';

export const rootReducer = combineReducers({
    user: UserReducer,
    general: GeneralReducer,
});
