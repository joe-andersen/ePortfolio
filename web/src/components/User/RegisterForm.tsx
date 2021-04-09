import React, { FC, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { registerUserAction, clearUserData } from '../../stores/User/UserActions';
import { useDispatch, useSelector } from 'react-redux';
import { getUserTokenSelector, getUserErrorSelector } from '../../stores/User/UserSelector';
import { Redirect } from 'react-router-dom';
import { setCookie, checkCookie } from '../../utils/UseCookie';

export const RegisterForm: FC<Record<string, never>> = () => {
    const isAuthenticated = useSelector(getUserTokenSelector) ?? checkCookie();
    const isError = useSelector(getUserErrorSelector);
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        if (isAuthenticated) {
            setCookie("token", isAuthenticated, 10);
        }
    }, [isAuthenticated])

    const onRegister = (event) => {
        event.preventDefault();
        
        const payload = {
            name: event.target.name.value,
            email: event.target.userName.value,
            password: event.target.password.value,
        };

        dispatch(registerUserAction(payload));
    }

    const onLoginClick = () => {
        dispatch(clearUserData());
        history.push('/login');
    }

    return (
        !isAuthenticated ?
            <div className="container-fluid">
                <div className="mb-3">
                    <div className="row">
                        <div className="col-4">
                            <h2>Please Register</h2>
                        </div>
                    </div>
                </div>
                {
                    isError ?
                        <div className="mb-3">
                            <div className="row">
                                <div className="col-3">
                                    <div className="alert alert-danger" role="alert">
                                        {isError}
                                    </div>
                                </div>
                            </div>
                        </div>
                    : null
                }
                <form onSubmit={onRegister}>
                    <div className="mb-3">
                        <div className="row">
                            <div className="col-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input type="text" className="form-control" id="name" placeholder="Stanley Hudson" required />
                                <div className="valid-feedback">
                                    Looks good!
                                </div>
                                <div className="invalid-feedback">
                                    Name is required
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mb-3">
                        <div className="row">
                            <div className="col-3">
                                <label htmlFor="userName" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="userName" placeholder="name@example.com" required />
                                <div className="valid-feedback">
                                    Looks good!
                                </div>
                                <div className="invalid-feedback">
                                    Username is required
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mb-3">
                        <div className="row">
                            <div className="col-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input type="password" className="form-control" id="password" required />
                                <div className="valid-feedback">
                                    Looks good!
                                </div>
                                <div className="invalid-feedback">
                                    Password is required
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mb-3">
                        <button type="submit" className="btn btn-info">Register</button>
                        <button
                            type="button"
                            className="btn btn btn-outline-secondary"
                            style={{ marginLeft: '5px'}}
                            onClick={() => onLoginClick()}
                        >
                            Log in
                        </button>
                    </div>
                </form>
            </div>
        : <Redirect to='/trips' />
    )
}
