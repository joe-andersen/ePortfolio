import {
    LOGIN_USER_SUCCESS,
    LOGIN_USER_ERROR,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_ERROR,
} from './UserActionTypes';
// import { UserState } from './UserTypes';

// export const initialState: UserState = {
//     token: null,
//     error: null
// }

export const UserReducer = (state, action) => {
    switch(action.type) {
        case LOGIN_USER_SUCCESS:
            return {
                ...state,
                token: action.user.token,
            }
        case LOGIN_USER_ERROR:
            return {
                ...state,
                error: action.payload.error,
            }
        case REGISTER_USER_SUCCESS:
            return {
                ...state,
                token: action.user.token,
            }
        case REGISTER_USER_ERROR:
            return {
                ...state,
                error: action.payload.error,
            }
        default:
            return {
                ...state,
            }
    }

};
