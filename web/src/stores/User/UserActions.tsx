import { REGISTER_USER, LOGIN_USER, LOGIN_USER_SUCCESS, LOGIN_USER_ERROR, CLEAR_TOKEN } from './UserActionTypes';

export const registerUserAction = (user) => {
    return {
        type: typeof REGISTER_USER,
        user
    }
};

export const loginUserAction = (user) => {
    return {
        type: LOGIN_USER,
        user
    }
};

export const loginUserSuccess = (user) => {
    return {
        type: LOGIN_USER_SUCCESS,
        payload: user,
    }
};

export const loginUserError = (user) => {
    return {
        type: LOGIN_USER_ERROR,
        payload: user,
    }
}

export const clearToken = () => {
    return {
        type: CLEAR_TOKEN,
    }
};
