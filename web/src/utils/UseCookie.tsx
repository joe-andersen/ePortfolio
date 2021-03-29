export const setCookie = (name, value, hours) => {
    let date = new Date();
    date.setTime(date.getTime() + (hours * 60 * 60 * 1000));
    let expires = `expires=${date.toUTCString()}`;
    document.cookie = `${name}=${value};${expires};path=/`;
}

export const getCookie = (name) => {
    let cname = `${name}=`
    let cookie = document.cookie.split(';');

    for (let i = 0; i < cookie.length; i++) {
        let c = cookie[i];
        while (c.charAt(0) === ' ') {
            c.substring(1);
        }
        if (c.indexOf(cname) === 0) {
            return c.substring(cname.length, c.length);
        }
    }
    return '';
}

export const checkCookie = () => {
    let user = getCookie('token');
    if (user !== '') {
        return user;
    } else {
        return null;
    }
}
