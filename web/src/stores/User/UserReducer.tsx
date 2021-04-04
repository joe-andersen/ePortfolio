import {
    LOGIN_USER,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_ERROR,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_ERROR,
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
            }
        case LOGIN_USER_SUCCESS:
            console.log("UserReducer:", action);
            return {
                ...state,
                token: action.payload.data[0].access_token,
                fetching: false,
            }
        case LOGIN_USER_ERROR:
            console.log("UserReducer:", action);
            return {
                ...state,
                error: action.payload.error,
                fetching: false,
            }
        // case REGISTER_USER_SUCCESS:
        //     return {
        //         ...state,
        //         token: action.user.token,
        //     }
        // case REGISTER_USER_ERROR:
        //     return {
        //         ...state,
        //         error: action.payload.error,
        //     }
        default:
            return {
                ...state,
            }
    }

};
