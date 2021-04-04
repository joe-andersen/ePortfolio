import {
    LOGIN_USER,
    LOGIN_USER_ERROR,
    LOGIN_USER_SUCCESS,
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

export type UserActions =
    | LoginRequest
    | LoginSuccess
    | LoginError;