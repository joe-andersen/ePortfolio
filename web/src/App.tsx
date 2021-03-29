import React, { FC } from 'react';
import { Title } from './components/Title';
import { LoginForm, RegisterForm } from './components/User';
import { Navigation } from './components/Nav';
import { TripListing, PrivateTripListing } from './components/Trips';
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
                    <Route path='/' exact={true} component={LoginForm} />
                    <Route path='/login' component={LoginForm} />
                    <Route path='/register' component={RegisterForm} />
                    <PrivateTripListing path='/trips' component={TripListing} />
                </Switch>
            </div>
        </BrowserRouter>
    )
};

export default App;