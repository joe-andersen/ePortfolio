import React, { Component, FC } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { checkCookie } from '../../utils/UseCookie';

export const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route { ...rest } render={props => (
            checkCookie() !== null ? (
                <Component { ...props } />
            ) : (
                <Redirect to={{
                        pathname: '/',
                        state: { from: props.location }
                    }}
                />
            )
        )} />
    )
};
