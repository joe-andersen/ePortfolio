import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUserAction, clearUserData } from '../../stores/User/UserActions';
import { getUserTokenSelector, getUserErrorSelector } from '../../stores/User/UserSelector';
import { Redirect } from 'react-router-dom';
import { setCookie, checkCookie } from '../../utils/UseCookie';
import { useHistory } from 'react-router-dom';

export const LoginForm: FC<Record<string, never>> = () => {
    const isAuthenticated = useSelector(getUserTokenSelector) ?? checkCookie();
    const isError = useSelector(getUserErrorSelector);
    const dispatch = useDispatch();
    const history = useHistory();

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

    const onRegisterClick = () => {
        dispatch(clearUserData());
        history.push('/register');
    }

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
                <form onSubmit={onLogin}>
                    <div className="mb-3">
                        <div className="row">
                            <div className="col-3">
                                <label htmlFor="userName" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="userName" placeholder="name@example.com" required />
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
                                <div className="invalid-feedback">
                                    Password is required
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mb-3">
                        <button type="submit" className="btn btn-info">Sign in</button>
                        <button
                            type="button"
                            className="btn btn btn-outline-secondary"
                            style={{ marginLeft: '5px'}}
                            onClick={() => onRegisterClick()}
                        >
                            Register
                        </button>
                    </div>
                </form>
            </div>
        : <Redirect to='/trips' />
    )
}
