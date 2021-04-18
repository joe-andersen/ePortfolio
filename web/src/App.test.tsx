import { render, screen } from '@testing-library/react'
import { createMemoryHistory } from 'history';
import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux'
import '@testing-library/jest-dom/extend-expect';
import App from './App';
import store from './stores/ConfigureStore';

test('the app renders', () => {
    const history = createMemoryHistory();
    render(
        <Provider store={store}>
            <Router history={history}>
                <App />
            </Router>
        </Provider>
    )
    expect(screen.getByText(/home/i)).toBeInTheDocument();
})