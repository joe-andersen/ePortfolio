import { POINT_CONVERSION_COMPRESSED } from 'node:constants';
import React, { FC } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { checkCookie } from '../../utils/UseCookie';

export const PrivateTripListing = ({ component: Component, ...rest }) => {
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
