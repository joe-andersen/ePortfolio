import { getCookie } from '../utils/UseCookie';

const apiUrl = 'http://localhost:8000/';

export const registerUser = (payload) => {
    const params = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload.user)
    };

    return fetch(`${apiUrl}user/register`, params)
        .then(response => {
            return response.json();
        })
        .then(json => {
            return json;
        });
};

export const loginUser = (payload) => {
    const params = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload.user),
    };

    return fetch(`${apiUrl}user/login`, params)
        .then(response => {
            return response.json();
        })
        .then(json => {
            return json;
        })
        .catch((error) => {
            console.log(error);
        });
};

export const addTrip = (trip) => {
    const params = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${getCookie('token')}`,
        },
        body: JSON.stringify(trip),
    };

    return fetch(`${apiUrl}trip`, params)
        .then(response => {
            return response.json();
        })
        .then(json => {
            return json;
        })
        .catch((error) => {
            console.log(error);
        });
};
