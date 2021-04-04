import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUserAction } from '../../stores/User/UserActions';
import { getUserTokenSelector } from '../../stores/User/UserSelector';
import { Redirect } from 'react-router-dom';
import { Title } from '../Title';
import { setCookie, checkCookie } from '../../utils/UseCookie';

export const LoginForm: FC<Record<string, never>> = () => {
    const isAuthenticated = useSelector(getUserTokenSelector) ?? checkCookie();
    const dispatch = useDispatch();

    useEffect(() => {
        if (isAuthenticated) {
            setCookie("token", isAuthenticated, 10);
        }
    }, [isAuthenticated])

    const onLogin = (event) => {
        event.preventDefault();

        const email = event.target.userName.value;
        const password = event.target.password.value;

        const payload = {
            email: email,
            password: password,
        };


        dispatch(loginUserAction(payload));
    };

    return (
        !isAuthenticated ?
            <div className="container-fluid">
                <div className="mb-3">
                    <div className="row">
                        <div className="col-3">
                            <h2>Please Login</h2>
                        </div>
                    </div>
                </div>
                <form onSubmit={onLogin}>
                    <div className="mb-3">
                        <div className="row">
                            <div className="col-3">
                                <label htmlFor="userName" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="userName" placeholder="name@example.com" />
                            </div>
                        </div>
                    </div>
                    <div className="mb-3">
                        <div className="row">
                            <div className="col-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input type="password" className="form-control" id="password" />
                            </div>
                        </div>
                    </div>
                    <div className="mb-3">
                        <button type="submit" className="btn btn-primary">Sign in</button>
                    </div>
                </form>
            </div>
        : <Redirect to='/trips' />
    )
}
