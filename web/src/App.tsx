import React, { FC } from 'react';
import { LoginForm, RegisterForm } from './components/User';
import { Navigation } from './components/Nav';
import { TripContainer } from './components/Trips';
import { PrivateRoute } from './components/Utilities/PrivateRoute';
import { HomeOpen, HomePrivate } from './components/Home';
import {
    BrowserRouter,
    Route,
    Switch,
} from 'react-router-dom';

const App: FC = () => {
    return (
        <BrowserRouter>
            <Navigation />       
            <div>
                <Switch>
                    <Route path='/' exact={true} component={HomeOpen} />
                    <Route path='/login' component={LoginForm} />
                    <Route path='/register' component={RegisterForm} />
                    <Route path='/trips' component={TripContainer} />
                    <PrivateRoute path='/home' component={HomePrivate} />
                </Switch>
            </div>
        </BrowserRouter>
    )
};

export default App;