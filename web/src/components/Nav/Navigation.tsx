import React, { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserTokenSelector } from '../../stores/User/UserSelector';
import { checkCookie, expireCookie } from '../../utils/UseCookie';
import { useHistory } from 'react-router-dom';
import { clearUserData } from '../../stores/User/UserActions';
import { clearVisibility } from '../../stores/General/GeneralActions';
import { Link } from 'react-router-dom';

export interface NavLinkProps {
    isActive: boolean;
    path: string;
    title: string;
    onClick: () => any;
}

const links = [
    { path: '/home', title: "Home", isActive: false },
    { path: '/trips', title: "Trips", isActive: false },
]

export const NavLink: FC<NavLinkProps> = ({ isActive, path, title, onClick }) => {
    return (
        <li className={`nav-item ${isActive ? "active" : ""}`}>
            <Link
                className="nav-link"
                to={path}
                onClick={() => onClick()}
            >
                {title}
            </Link>
        </li>
    )
}

export const Navigation: FC<Record<string, never>> = () => {
    const isAuthenticated = useSelector(getUserTokenSelector) ?? checkCookie();
    const dispatch = useDispatch();
    const history = useHistory();
    const [siteLinks, setSiteLinks] = useState({ links: [
        { path: '/home', title: "Home", isActive: false },
        { path: '/trips', title: "Trips", isActive: false },
    ]});
    


    const logOut = (event) => {
        event.preventDefault();
        dispatch(clearUserData());
        dispatch(clearVisibility());
        expireCookie();
        history.push('/');
    }

    const logIn = (event) => {
        event.preventDefault();
        dispatch(clearUserData());
        dispatch(clearVisibility());
        history.push('/login');
    }

    const handleLinkClick = (index) => {
        const avialableLinks = siteLinks.links.slice();
        for (const link in avialableLinks) {
            avialableLinks[link].isActive = index == link;
        }
        setSiteLinks({ links: avialableLinks })
    }

    return (
        <nav className="navbar navbar-expand navbar-light bg-light">
            <a className="navbar-brand" href="#"><img src="/images/logo.png" /></a>
            <ul className="navbar-nav mr-auto">
                 {siteLinks.links.map((link, index) => {
                     return (
                        <NavLink
                            path={link.path}
                            title={link.title}
                            isActive={link.isActive}
                            key={link.path}
                            onClick={() => handleLinkClick(index)}
                        />
                    )
                 })}
            </ul>
            <ul className="navbar-nav">
                {!isAuthenticated ?
                    <li className="nav-item">
                        <Link
                            className="nav-link"
                            to="/login"
                            onClick={(event) => logIn(event)}
                        >
                            Log In
                        </Link>
                    </li>
                :
                    <li className="nav-item">
                        <Link
                            className="nav-link"
                            to="/"
                            onClick={(event) => logOut(event)}
                        >
                            Log Out
                        </Link>
                    </li>
                }
            </ul>
        </nav>
    )
}