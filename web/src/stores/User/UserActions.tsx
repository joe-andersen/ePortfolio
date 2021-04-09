import { REGISTER_USER, LOGIN_USER, LOGIN_USER_SUCCESS, LOGIN_USER_ERROR, REGISTER_USER_ERROR, REGISTER_USER_SUCCESS, CLEAR_USER_DATA } from './UserActionTypes';

export const registerUserAction = (user) => {
    return {
        type: REGISTER_USER,
        user,
    }
};

export const registerUserError = (user) => {
    return {
        type: REGISTER_USER_ERROR,
        payload: user,
    }
};

export const registerUserSuccess = (user) => {
    return {
        type: REGISTER_USER_SUCCESS,
        payload: user,
    }
};

export const loginUserAction = (user) => {
    return {
        type: LOGIN_USER,
        user,
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

export const clearUserData = () => {
    return {
        type: CLEAR_USER_DATA,
    }
};
