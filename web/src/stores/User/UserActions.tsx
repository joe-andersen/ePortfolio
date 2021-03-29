import { REGISTER_USER, LOGIN_USER } from './UserActionTypes';

export const registerUserAction = (user) => {
    return {
        type: typeof REGISTER_USER,
        user
    }
};

export const loginUserAction = (user) => {
    return {
        type: typeof LOGIN_USER,
        user
    }
};
