const apiUrl = 'http://0.0.0.0:8000/';

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
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload.user)
    };

    return fetch(`${apiUrl}user/login`, params)
        .then(response => {
            return response.json();
        })
        .then(json => {
            return json;
        });
};
