import React from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import { Provider } from 'react-redux';
import { configureStore } from './stores/ConfigureStore';

const store = configureStore();

render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
