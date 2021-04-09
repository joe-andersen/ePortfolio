import {
    CLEAR_USER_DATA,
    LOGIN_USER,
    LOGIN_USER_ERROR,
    LOGIN_USER_SUCCESS,
    REGISTER_USER,
    REGISTER_USER_ERROR,
    REGISTER_USER_SUCCESS,
} from './UserActionTypes';

export interface UserState {
    token: string | null;
    error: string | null;
    fetching: boolean;
}

export interface AccessToken {
    access_token: string;
}

export interface User {
    data: AccessToken[];
    code: number;
    message: string;
}

export interface LoginRequestPayload {
    email: string;
    password: string;
}

export interface RegisterRequestPayload extends LoginRequestPayload {
    name: string;
}

export interface ErrorPayload {
    error: string;
}

export interface SuccessPayload<T> {
    data: T;
}

export interface LoginRequest {
    type: typeof LOGIN_USER;
    payload: LoginRequestPayload
}

export interface LoginSuccess {
    type: typeof LOGIN_USER_SUCCESS;
    payload: SuccessPayload<User>;
}

export interface LoginError {
    type: typeof LOGIN_USER_ERROR;
    payload: ErrorPayload;
}

export interface RegisterRequest {
    type: typeof REGISTER_USER;
    payload: RegisterRequestPayload;
}

export interface RegisterError {
    type: typeof REGISTER_USER_ERROR;
    payload: ErrorPayload;
}

export interface RegisterSuccess {
    type: typeof REGISTER_USER_SUCCESS;
    payload: SuccessPayload<User>;
}

export interface ClearUserData {
    type: typeof CLEAR_USER_DATA;
}

export type UserActions =
    | ClearUserData
    | LoginRequest
    | LoginSuccess
    | LoginError
    | RegisterRequest
    | RegisterSuccess
    | RegisterError;
