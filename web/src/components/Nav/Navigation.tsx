import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserTokenSelector } from '../../stores/User/UserSelector';
import { checkCookie, expireCookie } from '../../utils/UseCookie';
import { useHistory } from 'react-router-dom';
import { clearUserData } from '../../stores/User/UserActions';

export const Navigation: FC<Record<string, never>> = () => {
    const isAuthenticated = useSelector(getUserTokenSelector) ?? checkCookie();
    const dispatch = useDispatch();
    const history = useHistory();

    const logOut = (event) => {
        event.preventDefault();
        dispatch(clearUserData());
        expireCookie();
        history.push('/');
    }

    const logIn = (event) => {
        event.preventDefault();
        dispatch(clearUserData());
        history.push('/login');
    }

    return (
        <nav className="navbar navbar-expand navbar-light bg-light">
            <a className="navbar-brand" href="#"><img src="/images/logo.png" /></a>
            <button className="navbar-toggler" type="button" datatoggle="collapse" data-target="#navbarNavAltMarkup" ariacontrols="navbarNavAltMarkup" aria-expanded="false" arialabel="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-item nav-link active">Trips<span className=" sr-only "></span></a>
                </div>
            </div>
            <div className="navbar-end">
                {!isAuthenticated ?
                    <a className="navbar-item">
                        <span className="has-icon-left" onClick={(event) => logIn(event)}>Log In</span>
                    </a>
                :
                    <a className="navbar-item">
                        <span className="has-icon-left" onClick={(event) => logOut(event)}>Log Out</span>
                    </a>
                }
            </div>
        </nav>
    )
}