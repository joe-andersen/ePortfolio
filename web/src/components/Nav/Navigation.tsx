import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { getUserTokenSelector } from '../../stores/User/UserSelector';
import { checkCookie, expireCookie } from '../../utils/UseCookie';
import { useHistory } from 'react-router-dom'

export const Navigation: FC<Record<string, never>> = () => {
    let isAuthenticated = useSelector(getUserTokenSelector) ?? checkCookie();
    const history = useHistory();

    // TODO: fix this as it is not in anyway
    // correct. You need a action to clear
    // the state.
    const logOut = (event) => {
        event.preventDefault();
        expireCookie();
        history.push('/');
        isAuthenticated = false;
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
                    <div className="navbar-item">
                        <span className="has-icon-left">Log In</span>
                    </div>
                :
                    <div className="navbar-item">
                        <span className="has-icon-left" onClick={(event) => logOut(event)}>Log Out</span>
                    </div>
                }
            </div>
        </nav>
    )
}