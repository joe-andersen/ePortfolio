import { combineReducers } from 'redux';
import { UserReducer } from './User/UserReducer';
import { GeneralReducer } from './General/GeneralReducer';
import { TripReducer } from './Trips/TripReducer';

export const rootReducer = combineReducers({
    user: UserReducer,
    general: GeneralReducer,
    trips: TripReducer,
});
