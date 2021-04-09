import {
    LOGIN_USER,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_ERROR,
    REGISTER_USER,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_ERROR,
    CLEAR_USER_DATA,
} from './UserActionTypes';
import { UserState, UserActions } from './UserTypes';

export const initialState: UserState = {
    token: null,
    error: null,
    fetching: false,
}

export const UserReducer = (state = initialState, action: UserActions) => {
    switch(action.type) {
        case LOGIN_USER:
            return {
                ...state,
                fetching: true,
                error: null,
            }
        case LOGIN_USER_SUCCESS:
            return {
                ...state,
                token: action.payload.data[0].access_token,
                fetching: false,
                error: null,
            }
        case LOGIN_USER_ERROR:
            return {
                ...state,
                error: action.payload,
                fetching: false,
            }
        case REGISTER_USER:
            return {
                ...state,
                fetching: true,
                error: null,
            }
        case REGISTER_USER_SUCCESS:
            return {
                ...state,
                token: action.payload.data[0].access_token,
                fetching: false,
                error: null,
            }
        case REGISTER_USER_ERROR:
            return {
                ...state,
                error: action.payload,
                fetching: false,
            }
        case CLEAR_USER_DATA:
            return {
                ...state,
                error: null,
                fetching: false,
                token: null,
            }
        default:
            return {
                ...state,
            }
    }

};
